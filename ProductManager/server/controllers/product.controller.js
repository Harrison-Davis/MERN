const { response } = require('express');
const{ Product} = require('../models/product.model')





// Find all
module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// find one
module.exports.findOneProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneProduct => res.json({ user: oneProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


// create one
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// update one
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => res.json({ joke: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
        // new: true, runValidators: true;
    };



// delete one

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

