express = require('express');
const route = require('../network/network');

const routes = function (server) {
    server.use('/', route);
}

module.exports = routes;