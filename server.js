const express = require('express');
const mongoose = require("mongoose");
const Person = require("./model/person")
require("dotenv").config()
const app=express();


mongoose.connect(process.env.MONGO_URI,{
    dbName: "REST-API",
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err)=>err ? console.log(err) : console.log('database connected'))

app.listen(5050, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("server is up and running on port 5050");
    }
});
app.get("/getPerson", (req, res) => {
    Person.find()
        .then((users) => res.send(Person))
        .catch((err) => console.log(err.message));
});

app.post("/postPerson", (req, res) => {
    const { firstname,lastname, age } = req.body;
    let newPerson = new Person({
        firstname,
        lastname,
        age,
    });
    newPerson.save()
    .then(res.send(req.body))
    .catch((err) => console.error(err.message));
});
app.put("/putPerson/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(res.send("User Updated Successfully"))
        .catch((err) => console.error(err.message));
});
app.delete("/deletePerson/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(res.send("User Deleted Successfully"))
        .catch((err) => console.error(err.message));
});