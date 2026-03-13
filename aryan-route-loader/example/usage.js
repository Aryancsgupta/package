const express = require("express");
// In a real project, this would be: const autoRoutes = require("aryan-route-loader");
const autoRoutes = require("../index"); 
const path = require("path");

const app = express();

const routesPath = path.join(__dirname, "routes");

(async () => {
    // 1. Basic auto-loading 
    await autoRoutes(app, routesPath);

    // 2. Advanced: Prefixing and custom logger
    console.log("\n--- Testing recursive w/ prefix ---");
    await autoRoutes(app, {
        dir: routesPath,
        prefix: "/api/v1",
        extensions: ['.js'],
        recursive: true, 
        logger: (msg) => console.log(`[ADVANCED] ${msg}`)
    });

    // 3. Handles testing a non-existent folder
    console.log("\n--- Testing a non-existent folder ---");
    await autoRoutes(app, path.join(__dirname, "does-not-exist"), { ignoreErrors: true });

    app.listen(3000, () => {
      console.log("\nServer is running on port 3000.");
      console.log("Basic routes: http://localhost:3000/users");
      console.log("Advanced routes: http://localhost:3000/api/v1/users");
    });
})();
