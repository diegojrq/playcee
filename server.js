const express = require("express");
const { listen } = require("express/lib/application");

const app  = express();

const dbConfig = require('./db') 

const roomsRoute = require("./routes/rooms")

app.use("/api/rooms", roomsRoute)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server runnning on port ${port} using nodemon`));