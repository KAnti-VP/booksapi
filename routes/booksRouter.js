import express from 'express'
import * as controllers from '../controllers/booksControllers.js'

const router = express.Router()

router.get('/', controllers.getBooks);

router.get('/:id', controllers.getBookById);

router.post('/', controllers.createBook);

router.put('/:id', controllers.updateBook);

router.delete('/:id', controllers.deleteBook);

export default router