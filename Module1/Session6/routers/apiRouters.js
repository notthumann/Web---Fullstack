const express = require("express");

const Router = express.Router;

const apiRouter = Router();

const imageApiRouter = require('./imagesApiRouter')
const commentApiRouter = require('./commentApiRouter')
const userApiRounter = require('./userApiRouter')


apiRouter.get("/",(req, res) =>{
    res.send("Hello");
});

apiRouter.use('/images', imageApiRouter);

apiRouter.use('/comment', commentApiRouter);

apiRouter.use('/user', userApiRounter);

module.exports = apiRouter