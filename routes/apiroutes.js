const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//imports

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
                console.log(err);
                throw err;
        }else {
            res.send(data);
        }                  
})});
//GET route for api/notes

router.post("/api/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
         // Create array to hold old notes
         newNote.id = uuidv4();
         console.log(newNote);
            const notesArray = JSON.parse(data);
            notesArray.push(newNote);
            // newNote.push(uuidv4());
        // push the new note to this array
              
        // write the new array over the file
              fs.writeFile(`./db/db.json`, JSON.stringify(notesArray), (err) =>
              err
                ? console.error(err)
                : res.send(newNote)
            );
        });
})
//POST route for api/notes

module.exports = router;
