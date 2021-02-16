// Web Framework
const express = require ("express");
const app = express ();
//Used to work with directories and file paths
const path = require ("path");
//port
const port = 3000;
// UUID is used to make seperate ID's for each note so that they can deleted invidually
const uuid = require ("uuid");
//File Server Module
const fs = require ("fs");

//Sets express app to take Data Parsing
app.use(express.urlencoded({ extended: true}));


//Makes call to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Makes call to the Notes Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//Port Listen
app.listen (PORT, function (){
    console.log ("Now listening on port: " + PORT);
});

// Function for adding notes
app.post ("/api/notes" , (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNotes = req.body;
    addNotes.id = uuid.v4();
    notes.push(addNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});