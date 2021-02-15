const express = require ("express");
const app
const port = 3000;

const fs = require ("fs");


//Makes call to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Makes call to the Notes Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});