'use strict';

var Fluxxor = require('fluxxor');
var store   = require('store');
var _       = require('underscore');

var saveToLocalStorage = function(grids) {
    store.set('grids', grids);
};

module.exports = Fluxxor.createStore({
    initialize : function()
    {
        this.grids = [this.getInitialGrid()];

        this.bindActions(
            'ADD_GRID', 'onAddGrid',
            'ADD_TASK', 'onAddTask'
        );
    },

    getInitialGrid : function()
    {
        return {
            name  : 'Things to Do',
            tasks : []
        };
    },

    onAddGrid : function(name)
    {
        this.grids.push({
            name  : name,
            tasks : []
        });

        saveToLocalStorage(this.grids);

        this.emit('change');
    },

    onAddTask : function(task)
    {
        var grid = _.findWhere(this.grids, {name : task.grid});

        grid.tasks.push({
            quadrant  : task.quadrant,
            task      : task.task,
            completed : false
        });

        saveToLocalStorage(this.grids);

        this.emit('change');
    },

    saveToLocalStorage : function()
    {
        store.set('grids', this.grids);
    },

    getAll : function()
    {
        return this.grids;
    }
});
