const express = require('express');
const userRoutes = require('./routes/user.route');
const productCatRoutes = require('./routes/productCat.route');
const serverConfig = require('./config/server-config');
const server = express();

//JSON Response Output
server.use(express.json());

//Routes
server.use(userRoutes);
server.use(productCatRoutes);

//Connected
server.listen( serverConfig.port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('started');
    }
});


