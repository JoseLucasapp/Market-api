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
    const {marketId} = req.params;

    try{
        const products = await getAllProducts(marketId);
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.getProductById = async(req, res)=>{
    const {marketId, id} = req.params;

    try{
        const product = await getProductById(marketId, id);
        res.status(200).json(product);
    }catch(err){
        res.status(200).json(err);
    }
}

module.exports.addProduct = async(req, res)=>{
    const data = req.body;
    const {marketId} = req.params;

    try{
        await addProduct(marketId, data);
        res.status(200).json({msg: 'Created'});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports.editProduct = async(req, res)=>{
    const data = req.body;
    const {marketId, id} = req.params;

    try{
        await editProduct(marketId, id, data);
        res.status(200).json({msg: 'Updated'});
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.deleteProducts = async(req, res)=>{
    const {marketId, id} = req.params;

    try{
        await deleteProducts(marketId, id);
        res.status(200).json({msg: 'Deleted'});
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.getProductsByCategory = async(req, res)=>{
    const {marketId, categoryId} = req.params;

    try{
        const products = await getProductsByCategory(marketId, categoryId);
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.buyProduct = async(req, res)=>{
    const {marketId, id} = req.params;

    try{
        const buy = await buyProduct(marketId, id);
        res.status(200).json({msg: buy})
    }catch(err){
        res.status(500).json(err);
    }
}