const AuthorController = require('../controllers/author.controller');


module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.put('/api/author/update/:id', AuthorController.updateAuthor);
    app.post('/api/author/create', AuthorController.createAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);

}

