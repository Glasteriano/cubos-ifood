const express = require('express');
const router = express();

const controll = require('../controllers/controller');
const { addAuthor } = require('../controllers/addAuthor');
//=========================================================


router.get('/test', controll.test);

router.post('/author', addAuthor)
//=========================================================

module.exports = router;