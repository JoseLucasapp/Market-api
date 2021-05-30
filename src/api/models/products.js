const client = require('../../config/dbConnection');

const {newCode} = require('../helpers/idGenerator');

const getAllProducts = async(marketId)=>{
    const products = await client.query('select * from products inner join category on products.category_id = category.id where products.market = $1', [marketId]);
    const market = await client.query('select name from market where id = $1', [marketId]);
    if(products.rows.length <= 0){
        return 'Market not found';
    }
    (products.rows).map((m)=> m.market = market.rows[0].name);
    return {
        market: market.rows[0].name, products: products.rows
    };
}

const getProductById = async(marketId, id)=>{
    const product = await client.query(`select * from products inner join category on products.category_id = category.id where products.id = $1 and products.market = $2`, [id, marketId]);
    if(product.rows.length <= 0){
        return 'Product not found';
    }

    return product.rows;
}

const getProductsByCategory = async(marketId, categoryId)=>{
    const product = await client.query(`select * from products where products.category_id = $1 and products.market = $2`, [categoryId, marketId]);
    if(product.rows.length <= 0){
        return 'Category not found';
    }

    return product.rows;
}

const addProduct = async(marketId, data)=>{
    const idCode = newCode(16);
    const {product, description, price, unit, category_id} = data;
    return await client.query(`insert into products (id, product, description, price, unit, category_id, market) values ($1, $2, $3, $4, $5, $6, $7)`, [idCode, product, description, price, unit, category_id, marketId]);
}

const editProduct = async(marketId ,id, data)=>{
    const {product, description, price, unit, category_id} = data;
    return await client.query(`update products set product = $1, description = $2, price = $3, unit = $4, category_id = $5 where id = $6 and products.market = $7`, [product, description, price, unit, category_id, id, marketId]);
}

const deleteProducts = async(marketId, id)=>{
    return await client.query(`delete from products where id = $1 and products.market = $2`, [id, marketId]);
}

const buyProduct = async(marketId, id)=>{
    const product = await getProductById(marketId, id);
    const unit = product.unit;
    if(unit <= 0){
        return 'Not exists units of this product';
    }
    await client.query('UPDATE products SET unit = products.unit - 1 WHERE id = $1 and market = $2', [id, marketId]);
    return 'Purchased';
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProducts,
    getProductsByCategory,
    buyProduct
}