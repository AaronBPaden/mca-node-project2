"use strict";
const express = require('express');
const server = express();
const config = require('./config/config');

server.set('view engine', 'ejs');
server.listen(config.PORT, config.HOST, () => console.log(`Listening on ${config.HOST}:${config.PORT}`));
