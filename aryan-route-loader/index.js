const fs = require('fs');
const path = require('path');
const url = require('url');

const defaultOptions = {
  extensions: ['.js', '.mjs', '.cjs', '.ts'],
  recursive: false,
  prefix: '',
  logger: console.log,
  ignoreErrors: false,
};

async function loadPath(app, dirPath, options, currentPrefix = '') {
  const dirPathResolved = path.resolve(dirPath);
  
  let logFunc = options.logger === true ? console.log : options.logger;
  if (typeof logFunc !== 'function') logFunc = null;

  if (!fs.existsSync(dirPathResolved)) {
    if (!options.ignoreErrors && logFunc) {
      logFunc(`[aryan-route-loader] Error: The directory '${dirPathResolved}' does not exist.`);
    }
    return;
  }

  let files;
  try {
    files = await fs.promises.readdir(dirPathResolved, { withFileTypes: true });
  } catch (err) {
    if (!options.ignoreErrors && logFunc) {
      logFunc(`[aryan-route-loader] Error reading directory '${dirPathResolved}': ${err.message}`);
    }
    return;
  }

  for (const file of files) {
    const fullPath = path.join(dirPathResolved, file.name);

    if (file.isDirectory()) {
      if (options.recursive) {
        let nestedPrefix = currentPrefix + '/' + file.name;
        // Clean double slashes
        nestedPrefix = nestedPrefix.replace(/\/+/g, '/');
        await loadPath(app, fullPath, options, nestedPrefix);
      }
    } else {
      const ext = path.extname(file.name);
      if (options.extensions.includes(ext)) {
        try {
          let route;
          
          try {
             if (ext === '.mjs') {
                const fileUrl = url.pathToFileURL(fullPath).href;
                const module = await import(fileUrl);
                route = module.default || module;
             } else {
                // Try require first, which works best for CommonJS and TypeScript with ts-node
                route = require(fullPath);
                if (route && route.default) {
                   route = route.default;
                }
             }
          } catch (reqErr) {
             if (reqErr.code === 'ERR_REQUIRE_ESM') {
                 // Fallback to import() for true ES modules loaded as .js in a "type": "module" project
                 const fileUrl = url.pathToFileURL(fullPath).href;
                 const module = await import(fileUrl);
                 route = module.default || module;
             } else {
                 throw reqErr; // Throw other errors (e.g. syntax errors inside the route)
             }
          }

          // Check if valid Express Router
          const isRouter = typeof route === 'function' || (typeof route === 'object' && Object.getPrototypeOf(route) === require('express').Router);
          
          if (isRouter) {
            let finalPrefix = (options.prefix + currentPrefix).replace(/\/+/g, '/');
            if (finalPrefix === '') finalPrefix = '/';

            // Register with Express app
            if (finalPrefix !== '/' && finalPrefix !== '') {
              app.use(finalPrefix, route);
            } else {
              app.use(route);
            }

            if (logFunc) {
              const displayPrefix = finalPrefix !== '/' ? ` at ${finalPrefix}` : '';
              logFunc(`[aryan-route-loader] Loaded route: ${file.name}${displayPrefix}`);
            }
          }
        } catch (err) {
          if (!options.ignoreErrors && logFunc) {
            logFunc(`[aryan-route-loader] Failed to load route from ${file.name}: ${err.message}`);
          }
        }
      }
    }
  }
}

/**
 * Automatically load all Express route files from a given folder and register them.
 * 
 * @param {import('express').Application} app - The Express application instance.
 * @param {string|object} folderPathOrOptions - Folder path string or options object.
 * @param {object} [customOptions={}] - Optional configuration when first arg is string.
 * @returns {Promise<void>}
 */
async function autoRoutes(app, folderPathOrOptions, customOptions = {}) {
  let folderPath;
  let options;

  if (typeof folderPathOrOptions === 'string') {
    folderPath = folderPathOrOptions;
    options = { ...defaultOptions, ...customOptions };
  } else if (typeof folderPathOrOptions === 'object' && folderPathOrOptions !== null) {
    options = { ...defaultOptions, ...folderPathOrOptions };
    folderPath = options.dir || options.folder || options.directory;
  }

  if (!folderPath) {
    if (options && !options.ignoreErrors) {
       console.error('[aryan-route-loader] Error: Directory path is required. Use string as 2nd arg or provide { dir: "..." } in options.');
    }
    return;
  }

  await loadPath(app, folderPath, options, '');
}

module.exports = autoRoutes;
module.exports.default = autoRoutes;
