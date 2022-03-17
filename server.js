"use strict";
const express = require('express');
const server = express();
const config = require('./config/config');
const router = require('./routes/router');

server.set('view engine', 'ejs');
server.use('/', router);

server.listen(config.PORT, config.HOST, () => console.log(`Listening on ${config.HOST}:${config.PORT}`));
