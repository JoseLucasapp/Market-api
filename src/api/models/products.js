const client = require('../../config/dbConnection');

const join = "inner join category on products.category_id = category.id";

const getAllProducts = async()=>{
    return await client.query('select * from products');
}

const getProductById = async(id)=>{
    return await client.query(`select * from products ${join} where products.id = ${id}`);
}

const getProductsByCategory = async(id)=>{
    return await client.query(`select * from products where products.category_id = ${id}`)
}

const addProduct = async(data)=>{
    return await client.query(`insert into products (product, description, price, unit, category_id) values ('${data.product}', '${data.description}', '${data.price}', '${data.unit}', '${data.category}')`)
}

const editProduct = async(id, data)=>{
    const updates = [];
    let search = (data.fields).split(',') || data.fields;
    let value = (data.values).split(',') || data.values;
    search = search.map((s)=> s.trim());
    value = value.map((s)=> {
        if(s * 1){
            return s * 1;
        }else{
            let string = s.trim();
            s = string.toString();
            return "'"+s+"'";
        }
    });

    for(let i=0; i < search.length; i++){
        updates.push( search[i] + '=' + value[i]);
    }
    return await client.query(`update products set ${updates} where id = ${id}`)
}

const deleteProducts = async(id)=>{
    return await client.query(`delete from products where id = ${id}`);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProducts,
    getProductsByCategory
}