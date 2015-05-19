/* global window, require */
'use strict';

var React       = require('react');
var Application = require('./application');
var flux        = require('./flux');

React.withContext({flux : flux}, function () {
    React.render(React.createElement(Application), window.document.body);
});
