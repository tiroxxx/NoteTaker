const fs = require("fs");

// class for your notes
class Store {
    constructor(notes){
        this.notes = notes;
    }

    readNote(){
        return fs.readFile(__dirname + "/db.json", function(err){
            if(err) throw err;
        })
    }

    writeNote(){

    }

    deleteNote(){

    }
}

module.exports()
// defined fuctions that read, write, and delete