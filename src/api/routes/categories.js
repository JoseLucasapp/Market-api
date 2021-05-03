const categoriesController = require('../controllers/categories');

module.exports = (app)=>{
    app.get('/category', categoriesController.getAllCategories);
    app.post('/category', categoriesController.createCategory);
    app.put('/category/:id', categoriesController.editCategory);
    app.delete('/category/:id', categoriesController.removeCategory);
}