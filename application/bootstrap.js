/* global window, require */
'use strict';

var React       = require('react');
var Application = require('./application');
var flux        = require('./flux');

React.render(
    React.createElement(Application, {flux : flux}),
    window.document.body
);
