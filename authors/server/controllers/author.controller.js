const { response } = require('express');
const{ Author} = require('../models/author.model')





// Find all
module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// find one
module.exports.findOneAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneAuthor => res.json( oneAuthor ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


// create one
module.exports.createAuthor = (request, response) => {
    // const { name } = request.body;
    // console.log(name)
    // console.log(request.body)
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}

// update one
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedAuthor => res.json( updatedAuthor ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
        // new: true, runValidators: true;
    };



// delete one

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

