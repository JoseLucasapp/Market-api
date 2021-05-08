const marketController = require('../controllers/market');

module.exports = (app)=>{
    app.post('/market', marketController.newMarket);
}