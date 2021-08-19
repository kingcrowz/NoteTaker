const router = require('express').Router();
const path = require('path');
//imports

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
//GET route for notes

//default route = index.html from public
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//GET route for the main page with *

module.exports = router;
