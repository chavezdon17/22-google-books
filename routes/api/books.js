const router = require("express").Router();
const booksController = require("../../controllers/bookController");
//localhost:3001/api/books
router.route("/").get(booksController.findAll).post(booksController.save);

router
  .route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;
