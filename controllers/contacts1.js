const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //swagger.tags=['Contacts']
    const result = await mongodb.getDatabase().db().collection('contacts1').find();
    result.toArray().then((contacts1) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts1);
    });
};

const getSingle = async (req, res) => {
    //swagger.tags=['Contacts']
    const contacts1Id = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts1').find({_id: contacts1Id});
    result.toArray().then((contacts1) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts1[0]);
    });
};


const createContact = async (req, res) => {
    //swagger.tags=['Contacts']
    const contact1 = {
        email: req.body.email,
        username: req.body.username,
        lastName: req.body.lastName,
        name: req.body.name,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        ipaddress: req.body.ipaddress,

    };
    const response = await mongodb.getDatabase().db().collection('contacts1').insertOne(contact1);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        req.status(500).json(response.error || 'Some error occured while updating the user.')
    }
};

const updateContact = async (req, res) => {
    //swagger.tags=['Contacts']
    const contacts1Id = new ObjectId(req.params.id);
    const contact1 = {
        email: req.body.email,
        username: req.body.username,
        lastName: req.body.lastName,
        name: req.body.name,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        ipaddress: req.body.ipaddress,
    };
    const response = await mongodb.getDatabase().db().collection('contacts1').replaceOne({_id: contacts1Id }, contact1);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        req.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};

const deleteContact = async (req, res) => {
    //swagger.tags=['Contacts']
    const contacts1Id = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('contacts1').deleteOne({_id: contacts1Id });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        req.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};