const productsController = require('../controllers/products');

module.exports = (app)=>{
    app.get('/:marketId/products', productsController.getAllProducts);
    app.get('/:marketId/products/:id', productsController.getProductById);
    app.get('/:marketId/products/category/:categoryId', productsController.getProductsByCategory);
    app.post('/:marketId/products', productsController.addProduct);
    app.put('/:marketId/products/:id', productsController.editProduct);
    app.delete('/:marketId/products/:id', productsController.deleteProducts);
    app.put('/:marketId/products/:id/buy', productsController.buyProduct);
}