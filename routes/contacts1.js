const express = require('express');
const router = express.Router();

const contacts1Controller = require('../controllers/contacts1');

router.get('/', contacts1Controller.getAll);

router.get('/:id', contacts1Controller.getSingle);

router.post('/', contacts1Controller.createContact);

router.put('/:id', contacts1Controller.updateContact);

router.delete('/:id', contacts1Controller.deleteContact);

module.exports = router;
