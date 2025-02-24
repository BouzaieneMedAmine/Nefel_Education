import express from 'express'
import * as bookControllers from "../controllers/booksControllers.js"
const router =express.Router



router.route('/book')
.post(bookControllers.addBook)
.get(bookControllers.getAllBooks)

router.route("/book/:id")
.delete( bookControllers.deleteBook )
.get( bookControllers.getOneBook)
.put(bookControllers.updateBook)


export default router