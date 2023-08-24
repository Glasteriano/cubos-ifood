const express = require('express');
const router = express();

const { addAuthor } = require('../controllers/addAuthor');
//=========================================================

router.post('/author', addAuthor)
//=========================================================

module.exports = router;