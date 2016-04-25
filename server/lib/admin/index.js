'use strict';

var config = require('../../config/config');
//var adminService = require('./adminService');
var handler = require('../../lib/common/requestHandler');
var express = require('express');
var adminRoutes = express.Router();

/**
 * Admin API
 * @class admin
 **/

/**
 *
 * @method ping
 * @name admin#ping
 *
 */

function ping(req, res) {
    // not cached

    //adminService.ping(req, handler.request(req, res, 'ping'));
}

function attachRoutes(app) {

    adminRoutes.get('/admin/ping', ping);

    app.use('/' + config.version.major, adminRoutes);
}

module.exports = attachRoutes;