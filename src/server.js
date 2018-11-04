'use strict'

const mongoose = require('mongoose');
/* const app = require("./config/app"); */
const config = require("./config/sc");
const morgan = require("morgan");

//dependencies
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const api = require('../routes/Item');


mongoose.connection.openUri(config.db,(err,res) => {
    if (err) return console.log(` no se ha podido establecer la conexion a la base de datos ${err}`);

    console.log('alv')
    app.listen(config.port, () => {

        console.log(`servidor corriendo en http://localhost:${config.port}`);
    
    });
});




//middlewares





app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//app.use("/api",api);
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));





const itemRoute = require('./routes/Item');
const taskRoute = require('./routes/Item');
app.use('/task',taskRoute);
app.use('/item',itemRoute);

//static files




