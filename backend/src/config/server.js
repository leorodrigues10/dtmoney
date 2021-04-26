const express = require('express');
const router  = require('../api/router/Operation');
const connection = require('./database');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use("/api/v1", router)

connection.authenticate()
.then(() =>console.log("connection established!"))
.catch(error => {
  console.log("connection error");
  console.log(error)
});

module.exports = app;