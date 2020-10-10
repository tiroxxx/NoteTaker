const notes = require("../db/store");
const fs = require("fs");


module.exports = function (app) {
    // Get route
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });
    // post route
    app.post("/api/notes", function (req, res) {
        console.log(req.body);
        // catching the new note
        const newNote = req.body;
        // giving the new note the next available ID
        newNote.id = notes[notes.length - 1].id + 1;
        console.log(newNote.id);
        // adding the new note to my storage
        notes.push(newNote);
        // adding new note to the json file
        fs.writeFile("./db/db.json", notes, function (err) {
            if (err) throw err
        });
        // adding new note to the client
        res.json(newNote);
    });

    // delete
    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        // retrieve id of the note to be deleted
        const id = req.params.id;
        // when we find the note with desired id, delete it from notes array
        for (let i; i < notes.length; i++) {
            if (id === notes[i].id) {
                notes.splice(i, 1);
            }
        }
        // write newly edited notes array to the json file
        fs.writeFile("./db/db.json", notes, function (err) {
            if (err) throw err
        });
        res.json(notes);
    });

}
