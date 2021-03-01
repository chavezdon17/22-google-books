const router = require("express").Router();
const bookRoutes = require("./books");
//localhost:3001/api
router.use("/books", bookRoutes);

module.exports = router;
