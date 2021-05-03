const express = require('express');

module.exports = (app)=>{
    const routes = express.Router();

    app.use('/api', routes);

    require('../api/routes/categories')(routes);
}