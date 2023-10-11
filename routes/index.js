const router = require('express').Router();

router.get('/', (req, res) => { res.send('Contacts project!');});

router.use('/contacts1', require('./contacts1'));

module.exports = router;