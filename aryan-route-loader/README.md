# aryan-route-loader v2.0

Advanced Express route loader with configuration support, recursive loading, and TypeScript support.

## Features

- ✅ **Configuration Object**: Flexible options for customization
- ✅ **Multiple Extensions**: Support for `.js`, `.mjs`, `.cjs`, `.ts` files
- ✅ **Recursive Loading**: Load routes from nested directories
- ✅ **Route Prefixing**: Add base paths to all routes
- ✅ **Async Support**: Non-blocking file operations via async/await
- ✅ **Custom Logging**: Configurable logging with custom loggers
- ✅ **TypeScript Support**: Full type definitions included
- ✅ **Error Handling**: Robust error handling and validation
- ✅ **Backward Compatible**: Works with existing string-path codebase

## Installation

```bash
npm install aryan-route-loader
```

## Basic Usage

```javascript
const express = require("express");
const autoRoutes = require("aryan-route-loader");

const app = express();

// Await loading the routes
(async () => {
  await autoRoutes(app, "./routes");

  app.listen(3000, () => console.log("Server running"));
})();
```

## Advanced Configuration Object

You can configure advanced features like recursive routing, extensions, and custom loggers!

```javascript
await autoRoutes(app, {
  dir: "./routes",
  recursive: true,           // Loads from nested directories (like "routes/api/v1")
  prefix: "/api",            // Adds a base path to all routes
  extensions: [".js", ".ts"],// Only loads specific extensions
  logger: (msg) => console.log(`[MY-APP] ${msg}`), // Custom Logging function
  ignoreErrors: false        // Don't crash if a route fails to load
});
```

### Route Prefixing behavior:
If you enable `recursive: true` and have a folder like `./routes/users`, its routes will be prefixed properly according to folder structure. If you give `prefix: "/api"`, those routes become accessible at `/api/users/`. 

## Backward Compatible
Older configuration API format is fully supported!
```javascript
// Also valid:
await autoRoutes(app, "./routes", { recursive: true });
```
