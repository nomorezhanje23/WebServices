const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts1').find();
    result.toArray().then((contacts1) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts1);
    });
};

const getSingle = async (req, res) => {
    const contacts1Id = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts1').find({_id: contacts1Id});
    result.toArray().then((contacts1) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts1[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};