//model/wishlistItem.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var WishlistCardSchema = new Schema({
 	_id: {
        "$oid": String
    },
    items: {
        "item_1": String,
        "item_2": String
    }
});
//export our module to use in server.js
module.exports = mongoose.model('wishlistitem', WishlistCardSchema);