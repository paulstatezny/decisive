'use strict';

var Fluxxor = require('fluxxor');

module.exports = Fluxxor.createStore({
    initialize : function()
    {
        this.grids = [];

        this.bindActions(
            'ADD_GRID', 'onAddGrid'
        );
    },

    onAddGrid : function(name)
    {
        this.grids.push({
            name  : name,
            items : []
        });
    }
});
