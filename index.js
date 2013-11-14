/* jshint node: true */
/* global fis */

'use strict';

var doT = require('dot');

module.exports = function(content, file, conf){
    fis.util.merge(doT.templateSettings, conf);
    return doT.template(content).toString();
};

