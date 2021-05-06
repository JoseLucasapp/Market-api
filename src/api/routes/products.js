const productsController = require('../controllers/products');

module.exports = (app)=>{
    app.get('/products', productsController.getAllProducts);
    app.get('/products/:id', productsController.getProductById);
    app.get('/products/category/:id', productsController.getProductsByCategory);
    app.post('/products', productsController.addProduct);
    app.put('/products/:id', productsController.editProduct);
    app.delete('/products/:id', productsController.deleteProducts);
}