import { model, Schema } from "mongoose";

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The book title is required. Please enter the TITLE."],
      minLength: [2, "Minimum title length is 2 characters."],
      maxLength: [255, "Maximum title length is 255 characters."]
    },
    author: {
      type: String,
      required: [true, "The book must have an AUTHOR. Please enter the AUTHOR."],
      minLength: [5, "Minimum author length is 5 characters."],
      maxLength: [255, "Maximum author length is 255 characters."]
    },
    pages: {
      type: Number,
      required: [true, "Your book must have at least one page."]
    },
    isValidObjectId: {
      type: Boolean,
      default: true
    },
    likes: {
      type: Number,
      default: 0,
      min: [0, "Likes cannot be negative."] // Ensures likes stay positive
    }
  },
  { timestamps: true }
);

const Books = model("Books", booksSchema);
export default Books;
