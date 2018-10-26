
const mongoose = require('mongoose');
const app = require("./config/app");
const config = require("./config/sc");

mongoose.connection.openUri
mongoose.connection.openUri(config.db,(err,res) => {
    if (err) return console.log(` no se ha podido establecer la coneccion a la base de datos ${err}`);

    console.log('aaaaaaaa')
    app.listen(config.port, () => {

        console.log(`servidor corriendo en http://localhost:${config.port}`);
    
    });
});




//middlewares


//routes
const itemRoute = require('./routes/Item');
app.use('/item',itemRoute);

//static files




