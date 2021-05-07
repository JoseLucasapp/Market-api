const {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProducts,
    getProductsByCategory,
    buyProduct
}= require('../models/products');

module.exports.getAllProducts = async(req, res)=>{
    try{
        const products = await getAllProducts();
        res.status(200).json(products.rows);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.getProductById = async(req, res)=>{
    const {id} = req.params;

    try{
        const product = await getProductById(id);
        res.status(200).json(product.rows);
    }catch(err){
        res.status(200).json(err);
    }
}

module.exports.addProduct = async(req, res)=>{
    const data = req.body;

    try{
        await addProduct(data);
        res.status(200).json({msg: 'Created'});
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.editProduct = async(req, res)=>{
    const data = req.body;
    const {id} = req.params;

    try{
        await editProduct(id, data);
        res.status(200).json({msg: 'Updated'});
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.deleteProducts = async(req, res)=>{
    const {id} = req.params;

    try{
        await deleteProducts(id);
        res.status(200).json({msg: 'Deleted'});
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.getProductsByCategory = async(req, res)=>{
    const {id} = req.params;

    try{
        const products = await getProductsByCategory(id);
        res.status(200).json(products.rows);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.buyProduct = async(req, res)=>{
    const {id} = req.params;

    try{
        const buy = await buyProduct(id);
        res.status(200).json({msg: buy})
    }catch(err){
        res.status(500).json(err);
    }
}