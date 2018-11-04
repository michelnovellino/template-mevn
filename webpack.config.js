const path = require('path');


module.exports = { entry: ['./src/app/main.js'], output: { path: __dirname + '/src/public/js', filename: 'bundle.js' } }