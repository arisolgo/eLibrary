express = require('express');
const book = require('../components/book/network');

const routes = function (server) {
    server.use('/book', book);
}

module.exports = routes;