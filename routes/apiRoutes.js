const dbJson = require("../db/db.json");
const store = require("../db/store");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        store.readNote
    })
}
// Get route

// post route

// delete