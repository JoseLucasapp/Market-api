const client = require('../../config/dbConnection');

const {newCode} = require('../helpers/idGenerator');

const newMarket = async(data)=>{
    const {name} = data;
    let id = newCode(8);
    let check = await client.query('select * from market where id = $1', [id]);
    while(check.rows.length > 0){
        id = newCode(8);
        check = await client.query('select * from market where id = $1', [id]);
    }
    await client.query('insert into market (id, name) values ($1, $2)', [id, name])
    return await client.query('select * from market where id = $1', [id]);
}

module.exports = { newMarket };