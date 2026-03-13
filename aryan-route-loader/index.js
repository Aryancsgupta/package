const fs = require('fs');
const path = require('path');

/**
 * Automatically load all Express route files from a given folder and register them in an Express app.
 * 
 * @param {import('express').Application} app - The Express application instance.
 * @param {string} folderPath - The relative or absolute path to the directory containing route files.
 */
function autoRoutes(app, folderPath) {
  try {
    const resolvedPath = path.resolve(folderPath);

    // Handle errors if folder does not exist
    if (!fs.existsSync(resolvedPath)) {
      console.error(`[aryan-route-loader] Error: The directory '${resolvedPath}' does not exist.`);
      return;
    }

    // Read all files inside the given folder
    const files = fs.readdirSync(resolvedPath);

    files.forEach((file) => {
      // Ignore non-js files
      if (!file.endsWith('.js')) {
        return;
      }

      const fullPath = path.join(resolvedPath, file);

      try {
        // Import each route file
        const route = require(fullPath);

        // Automatically register it using app.use()
        if (typeof route === 'function' || (typeof route === 'object' && Object.getPrototypeOf(route) === require('express').Router)) {
          app.use(route);
          // Console log loaded routes
          console.log(`[aryan-route-loader] Loaded route file: ${file}`);
        } else {
          // If it's a valid router/middleware, express can use it
          app.use(route);
          console.log(`[aryan-route-loader] Loaded route file: ${file}`);
        }
      } catch (err) {
        console.error(`[aryan-route-loader] Failed to load route from ${file}:`, err.message);
      }
    });
  } catch (err) {
    console.error(`[aryan-route-loader] Unexpected error while loading routes:`, err.message);
  }
}

module.exports = autoRoutes;
