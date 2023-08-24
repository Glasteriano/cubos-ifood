const express = require('express');
const router = express();

const { addAuthor, findAuthor } = require('../controllers/author');
const { addBook } = require('../controllers/book');

router.post('/author', addAuthor);
router.get('/author/:id', findAuthor);
router.post('/author/:id/book', addBook);

module.exports = router;