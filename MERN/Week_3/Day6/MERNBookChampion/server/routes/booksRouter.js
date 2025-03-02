import { Router } from "express";
import * as bookControllers from "../controllers/booksControllers.js";

const router = Router();

router.route("/book")
  .post(bookControllers.addBook)
  .get(bookControllers.getAllBooks);

router.route("/book/:id")
  .get(bookControllers.getOneBook)
  .put(bookControllers.updateBook)
  .delete(bookControllers.deleteBook);

router.route("/book/:id/like")
  .put(bookControllers.likeBook); // Add Like Route

export default router;
