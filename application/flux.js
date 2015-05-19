'use strict';

let React, Fluxxor, GridStore, stores, actions;

React     = require('react');
Fluxxor   = require('fluxxor');
GridStore = require('./flux/grid-store');
stores    = {grid : new GridStore()};
actions   = require('./flux/actions');

module.exports = new Fluxxor.Flux(stores, actions);
