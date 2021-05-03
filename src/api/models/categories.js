const client = require('../../config/dbConnection');

const createCategory = async(data)=>{
    return await client.query(`insert into category (name) values ('${data.name}')`);
}

const getAllCategories = async()=>{
    return await client.query('select * from category');
}

const editCategory = async(data, id)=>{
    return await client.query(`update category set ${data.column} = '${data.alter}' where id = ${id}`)
}

const removeCategory = async(id)=>{
    return await client.query(`delete from category where id = ${id}`);
}

module.exports = {
    createCategory,
    getAllCategories,
    editCategory,
    removeCategory
}