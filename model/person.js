const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstname :{type: String,required: true},
    lastname: {type: String,required: true},
    age: {type: Number,required: true},
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;