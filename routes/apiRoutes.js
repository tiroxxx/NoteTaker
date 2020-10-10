const notes = require("../db/store");
const fs = require("fs");


module.exports = function (app) {
    // Get route
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });
    // post route
    app.post("/api/notes", function(req,res) {
        console.log(req.body);
        // catching the new note
        const newNote = req.body;
        // giving the new note the next available ID
        newNote.id = notes[notes.length - 1].id + 1;
        console.log(newNote.id);
        // adding the new note to my storage
        

    });

    // delete


}
