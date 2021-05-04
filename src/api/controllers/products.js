const {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProducts
}= require('../models/products');

module.exports.getAllProducts = async(req, res)=>{
    try{
        const products = await getAllProducts();
        res.status(200).json(products.rows);
    }catch(err){
        res.status(500).json();
    }
}

module.exports.getProductById = async(req, res)=>{
    const {id} = req.params;

    try{
        const product = await getProductById(id);
        res.status(200).json(product.rows);
    }catch(err){
        res.status(200).json();
    }
}

module.exports.addProduct = async(req, res)=>{
    const data = req.body;

    try{
        await addProduct(data);
        res.status(200).json();
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.editProduct = async(req, res)=>{
    const data = req.body;
    const {id} = req.params;

    try{
        await editProduct(id, data);
        res.status(200).json();
    }catch(err){
        res.status(500).json();
    }
}

module.exports.deleteProducts = async(req, res)=>{
    const {id} = req.params;

    try{
        await deleteProducts(id);
        res.status(200).json();
    }catch(err){
        res.status(500).json();
    }
}