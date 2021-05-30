const categoriesController = require('../controllers/categories');

module.exports = (app)=>{
    app.get('/category', categoriesController.getAllCategories);
    app.post('/:admin/category/', categoriesController.createCategory);
    app.put('/:admin/category/:id', categoriesController.editCategory);
    app.delete('/:admin/category/:id', categoriesController.removeCategory);
}