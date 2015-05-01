'use strict';

var Fluxxor = require('fluxxor');

var GridStore = require('./flux/grid-store');

var stores = {
    grid : new GridStore()
};

var actions = require('./flux/actions');

module.exports = new Fluxxor.Flux(stores, actions);
