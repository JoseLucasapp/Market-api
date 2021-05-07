const client = require('../../config/dbConnection');

const createCategory = async(data)=>{
    const {category} = data;
    return await client.query(`insert into category (category) values ($1)`,[category]);
}

const getAllCategories = async()=>{
    return await client.query('select * from category');
}

const editCategory = async(data, id)=>{
    const {category} = data;
    return await client.query(`update category set category = $1 where id = $2`, [category, id])
}

const removeCategory = async(id)=>{
    return await client.query(`delete from category where id = $1`, [id]);
}

module.exports = {
    createCategory,
    getAllCategories,
    editCategory,
    removeCategory
}