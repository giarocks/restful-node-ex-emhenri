//import mongoose from 'mongoose';
var mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type: String
        // ,
        // required: 'Enter a fname'
    },
    lastName:{
        type: String
        // ,
        // required: 'Enter a lname'
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        default: Date.now
        //when nothing passed
    }
});

// export default ContactSchema;