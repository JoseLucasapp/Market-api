const {
    createCategory,
    getAllCategories,
    editCategory,
    removeCategory
} = require('../models/categories');

module.exports.createCategory = async(req, res)=>{
    const data = req.body;
    const {admin} = req.params;
    try{
        const category = await createCategory(admin, data);
        res.status(200).json(category);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.getAllCategories = async(req, res)=>{
    try{
        const categories = await getAllCategories();
        res.status(200).json(categories.rows);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.editCategory = async(req, res)=>{
    const {id, admin} = req.params;
    const data = req.body;

    try{
        const updated = await editCategory(admin,data, id);
        res.status(200).json(updated);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.removeCategory = async(req, res)=>{
    const {id, admin} = req.params;

    try{
        const deleted = await removeCategory(admin,id);
        res.status(200).json(deleted);
    }catch(err){
        res.status(500).json(err);
    }
}