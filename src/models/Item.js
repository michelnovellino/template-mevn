const mongoose = require('mongoose');
const {Schema}= mongoose;

const Item = new Schema(
{
name: {type: String},
price: {type: Number}
},{
    colecction: 'items'
});

module.exports = mongoose.model('Item',Item);