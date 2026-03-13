const express = require("express");
// In a real project, this would be: const autoRoutes = require("aryan-route-loader");
const autoRoutes = require("../index"); 
const path = require("path");

const app = express();

const routesPath = path.join(__dirname, "routes");

// Auto-loads all the routing files from Example/Routes folder
autoRoutes(app, routesPath);

// Handles testing a non-existent folder
console.log("\n--- Testing a non-existent folder ---");
autoRoutes(app, path.join(__dirname, "does-not-exist"));

app.listen(3000, () => {
  console.log("\nServer is running on port 3000.");
  console.log("You can test the following routes:");
  console.log("  http://localhost:3000/users");
  console.log("  http://localhost:3000/posts");
});
