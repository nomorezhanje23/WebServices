const router = require('express').Router();

router.get('/', (req, res) => { res.send('Contacts project!');});

module.exports = router;