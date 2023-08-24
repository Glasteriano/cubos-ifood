const express = require('express');
const router = express();

const { addAuthor, findAuthor } = require('../controllers/author');

router.post('/author', addAuthor);
router.get('/author/:id', findAuthor);

module.exports = router;