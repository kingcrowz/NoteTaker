const express = require('express');
const fs = require('fs');
const htmlroutes = require('./routes/htmlroutes');
const apiroutes = require("./routes/apiroutes");
//imports

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiroutes);
app.use(htmlroutes);
//custom middleware

app.listen(PORT, () =>
  console.log(`Reference: http://localhost:${PORT}`)
)
