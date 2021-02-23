const mongoose = require("mongoose");

const bookSchema = mongoose.Schema;

const bookSchema = new Schema({
  Title: {
    type: String,
    trim: true,
    required: "Enter a name for title",
  },
  Author: {
    type: String,
    trim: true,
    required: "Enter Author",
  },
  description: {
    type: String,
    trim: true,
    required: "Description",
  },
  Image: {
    type: String,
    trim: true,
    required: "Image",
  },
  Link: {
    type: String,
    trim: true,
    required: "Enter a Link",
  },
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
