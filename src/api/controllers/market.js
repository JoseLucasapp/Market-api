const { newMarket } = require('../models/market');

module.exports.newMarket = async(req, res)=>{
    const data = req.body;
    try{
        const market = await newMarket(data);
        res.status(200).json(market.rows);
    }catch(err){
        res.status(500).json(err);
    }
}