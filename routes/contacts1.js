const express = require('express');
const router = express.Router();

const contacts1Controller = require('../controllers/contacts1');

router.get('/', contacts1Controller.getAll);

router.get('/:id', contacts1Controller.getSingle);

module.exports = router;
