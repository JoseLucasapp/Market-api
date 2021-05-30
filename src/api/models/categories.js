const client = require('../../config/dbConnection');

const {idToCategory} = require('../helpers/idCategoryGenerator');

const getAllCategories = async()=>{
    return await client.query('select * from category');
}

const checkIsAdmin = async(admin)=>{
    return await client.query('select * from administrator where id=$1',[admin]);
}

const createCategory = async(admin, data)=>{
    const {category} = data;
    const isAdmin = await checkIsAdmin(admin);
    if(isAdmin.rows.length <= 0){
        return "Only admin can add new categories.";
    }
    const id = idToCategory();
    await client.query(`insert into category (id,category) values ($1, $2)`,[id,category]);
    return (await getAllCategories()).rows;
}

const editCategory = async(admin, data, id)=>{
    const {category} = data;
    const isAdmin = await checkIsAdmin(admin);
    if(isAdmin.rows.length <= 0){
        return "Only admin can update categories.";
    }
    await client.query(`update category set category = $1 where id = $2`, [category, id]);
    return "Updated";
}

const removeCategory = async(admin, id)=>{
    const isAdmin = await checkIsAdmin(admin);
    if(isAdmin.rows.length <= 0){
        return "Only admin can remove categories.";
    }
    await client.query(`delete from category where id = $1`, [id]);
    return "Deleted"
}

module.exports = {
    createCategory,
    getAllCategories,
    editCategory,
    removeCategory
}