const fs = require("fs");

// class for your notes
class Store {
    constructor(title, notes){
        this.title = title;
        this.notes = notes;
    }

    readNote(){
        return fs.readFile(__dirname + "/db.json", function(err){
            if(err) throw err;
        })
    }

    writeNote(){
        return fs.writeFile(__dirname + "/db.json", this.notes, function(err){
            if(err) throw err;
        })
    }

    deleteNote(){

    }
}

module.exports = Store;
// defined fuctions that read, write, and delete