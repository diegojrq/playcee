const express = require("express");
const { listen } = require("express/lib/application");

const app  = express();

const dbConfig = require('./db.js') 

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server runnning on port ${port} using nodemon`));