const router = require("express").Router();
const booksController = require("../../controllers/bookController");

router.route("/").get(booksController.findAll).post(booksController.save);

router
  .route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;
