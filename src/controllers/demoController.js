import mongoose from 'mongoose';
import {ContactSchema} from "../models/demoModel"
// var mongoose = require('mongoose');
// var {ContactSchema} = require('../models/demoModel');

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, resp) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err) {
            resp.send(err);
        }
        resp.json(contact);
    });
};

export const getContacts = (req, resp) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      resp.send(err);
    }
    resp.json(contact);
  });
};

export const getContactWithID = (req,res) => {
    Contact.findById(req.params.contactId, (err,contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req,res) => {
    Contact.findOneAndUpdate({_id:req.params.contactId}, req.body,{new:true},(err,contact)=> {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = (req, res) => {
    Contact.remove({_id:req.params.contactId}, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.json({message:'Successfully deleted Contact'});
    });
};