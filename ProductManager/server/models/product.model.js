const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: String},
    description: {type: String},
}, {timestampes: true});

module.exports.Product = mongoose.model("Product", ProductSchema);