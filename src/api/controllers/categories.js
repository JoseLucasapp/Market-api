const {
    createCategory,
    getAllCategories,
    editCategory,
    removeCategory
} = require('../models/categories');

module.exports.createCategory = async(req, res)=>{
    const data = req.body;

    try{
        await createCategory(data);
        res.status(200).json();
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
    const {id} = req.params;
    const data = req.body;

    try{
        await editCategory(data, id);
        res.status(200).json();
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.removeCategory = async(req, res)=>{
    const {id} = req.params;

    try{
        await removeCategory(id);
        res.status(200).json();
    }catch(err){
        res.status(500).json(err);
    }
}