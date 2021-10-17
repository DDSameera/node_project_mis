const express = require('express');
const userRoutes = require('./src/routes/user.route');
const productCatRoutes = require('./src/routes/productCat.route');
const serverConfig = require('./src/config/server-config');
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


