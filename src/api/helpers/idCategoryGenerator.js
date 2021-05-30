const idToCategory = ()=>{
    let id = 0
    id = Math.floor(Math.random()*(99999999 - 11111111)+ 11111111);
    return id;
}

module.exports = {idToCategory}