const ProductController = require('../controllers/product.controller');


module.exports = function(app){
    // app.get('/api/', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    // app.put('api/product/update/:id', ProductController.updateProduct);
    app.post('/api/create', ProductController.createProduct);
    // app.delete('/api/delete', ProductController.deleteProduct);

}

