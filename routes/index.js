const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Contacts project!']
    res.send('Contacts project!');});

router.use('/contacts1', require('./contacts1'));

module.exports = router;