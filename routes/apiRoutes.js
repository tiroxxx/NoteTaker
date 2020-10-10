let notes = require("../db/store");
const fs = require("fs");


module.exports = function (app) {
    // Get route
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function(err, data) {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });
    // post route
    app.post("/api/notes", function (req, res) {
        console.log(req.body);
        // catching the new note
        const newNote = req.body;
        // giving note an ID
        newNote.id = notes.length;
        console.log(newNote.id);
        
        fs.readFile("./db/db.json", "utf8", function(err, data){
            if (err) throw err;
            notes = JSON.parse(data);
            // adding the new note to the storage array
            notes.push(newNote);
            // updating json file
            fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
                if (err) throw err;
            });
        });
        // adding new note to the client
        res.json(newNote);
    });

    // delete
    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        // retrieve id of the note to be deleted
        const id = parseInt(req.params.id);
        // when we find the note with desired id, delete it from notes array
        for (let i; i < notes.length; i++) {
            if (id == notes[i].id) {
                notes.splice(i, 1);
                console.log(notes);
            }
        }
        // write newly edited notes array to the json file
        fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
            if (err) throw err
        });
        res.json(notes);
    });

}
