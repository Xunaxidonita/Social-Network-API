const router = require("express").Router();
const userRoutes = require("./user_routes");
const thoughtRoutes = require("./thought_routes");

// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use("/thoughts", thoughtRoutes);
// add prefix of `/users` to routes created in `user-routes.js`
router.use("/users", userRoutes);

module.exports = router;
