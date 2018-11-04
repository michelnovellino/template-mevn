'use strict'
//dependencies
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('../routes/Item');



app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use("/api",api);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

console.log(express.static(path.join(__dirname,'public')))

module.exports = app;

