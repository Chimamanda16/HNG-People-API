const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

require("dotenv").config();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Making a connection to the database
mongoose.connect(process.env.conncectionString).then((response)=>{}).catch((err)=>{
   console.log(err); 
});

//Creating a schema
const personSchema = new mongoose.Schema({
    Name: String
});

//Creating a model
const Person = mongoose.model("Person", personSchema);

// Create
app.post("/api", async(req, res)=>{
    let name = req.body.name;
    if (!name || typeof name != "string") return res.status(500).json({ msg: "Name field is required" });
    try{
        Person.findOne({Name: name}).then((person)=>{
            if(person){
                return res.status(500).json({error: "Person already created"});
            }
            else{
                let newPerson = new Person({
                    Name: name
                });
                newPerson.save();
                res.send("Person saved");
            }
        });
    }catch(err){
        res.status(500).json({error: "Failed to create person"});
    }
});

//Read
app.get("/api", async(req, res) =>{
    try{
        await Person.find().then((persons) =>{
            res.json(persons);
        });
    }
    catch(err){
        res.status(500).json({error: "Failed to find document"});
    }
});

app.get("/api/:user_id", async(req, res)=>{
    let name = req.params.user_id;
    if (!name || typeof name != "string") return res.status(500).json({ msg: "Name field is required" });
    try{
        Person.findOne({Name: name}).then((person)=>{
            if(!person){
                return res.status(404).json({error: "Person does not exist"});
            }
            else{
                res.json(person);
            }
        });
    }catch(err){
        res.status(500).json({error: "Failed to find collection"});
    }
});

//Update
app.put("/api/:user_id", async(req, res) =>{
    let newName = req.body.name;
    let name = req.params.user_id;
    if (!newName || typeof newName != "string") return res.status(500).json({ msg: "Name field is required" });
    try{
        Person.findOne({Name: newName}).then((result) =>{
            if(result){
                res.send("User with name " + newName + " already exists!");
            }
            else{
                Person.findOneAndUpdate({Name: name}, {Name: newName}).then((person) => {
                    if (!person) {
                        let newPerson = new Person({
                            Name: name
                        });
                        newPerson.save();
                        res.send("Person saved");
                    }
                    else {
                      res.json("Person updated!");
                    }
                });
            }
        });
    }
    catch(error){
        res.status(500).json({error: "Failed to update person"});
    }
});

//Delete
app.delete("/api/:user_id", async(req, res) =>{
    let name = req.params.user_id;
    if (!name || typeof name != "string") return res.status(500).json({ msg: "Name field is required" });
    try{
        Person.findOneAndDelete({Name: name});
        res.send("Person deleted!");
    }catch{
        res.status(500).json("Failed to remove person");
    }
});

app.listen(PORT, (req, res)=>{
    console.log("Server has started on port 3000");
});