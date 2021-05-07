const client = require('../../config/dbConnection');

const getAllProducts = async()=>{
    return await client.query('select * from products');
}

const getProductById = async(id)=>{
    return await client.query(`select * from products inner join category on products.category_id = category.id where products.id = $1`, [id]);
}

const getProductsByCategory = async(id)=>{
    return await client.query(`select * from products where products.category_id = $1`, [id]);
}

const addProduct = async(data)=>{
    const {product, description, price, unit, category_id} = data;
    return await client.query(`insert into products (product, description, price, unit, category_id) values ($1, $2, $3, $4, $5)`, [product, description, price, unit, category_id]);
}

const editProduct = async(id, data)=>{
    const {product, description, price, unit, category_id} = data;
    return await client.query(`update products set product = $1, description = $2, price = $3, unit = $4, category_id = $5 where id = $6`, [product, description, price, unit, category_id, id]);
}

const deleteProducts = async(id)=>{
    return await client.query(`delete from products where id = $1`, [id]);
}

const buyProduct = async(id)=>{
    const product = await getProductById(id);
    const unit = product.rows[0].unit;
    if(unit <= 0){
        return 'Not exists units of this product';
    }
    await client.query('UPDATE products SET unit = products.unit - 1 WHERE id = $1', [id]);
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