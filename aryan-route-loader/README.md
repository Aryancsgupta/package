# aryan-route-loader

Automatically load all Express route files from a given folder and register them in an Express app.

## Features

- Reads all files inside the given folder automatically.
- Imports each route file dynamically.
- Automatically registers the routes using `app.use()`.
- Ignores non-JS files automatically.
- Logs loaded routes to the console for easy debugging.
- Handles errors gracefully if the given folder does not exist.

## Installation

```bash
npm install aryan-route-loader
```

## Example Usage

### 1. File Structure

```text
my-app/
├── routes/
│   ├── users.js
│   └── posts.js
├── app.js
```

### 2. Set up your Express Application (`app.js`)

```javascript
const express = require("express");
const autoRoutes = require("aryan-route-loader");

const app = express();

// Automatically load and register all routes in the "routes" folder
autoRoutes(app, "./routes");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

### 3. Creating Route Files (`routes/users.js`)

Each route file should export an Express Router.

```javascript
const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.json({ message: "Users API is working!" });
});

module.exports = router;
```
