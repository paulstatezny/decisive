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
        this.grids        = [this.getInitialGrid()];
        this.selectedGrid = 0;

        this.bindActions(
            'ADD_GRID', 'onAddGrid',
            'ADD_TASK', 'onAddTask',
            'REMOVE_TASK', 'onRemoveTask',
            'SELECT_GRID', 'onSelectGrid'
        );
    },

    getInitialGrid : function()
    {
        return {
            name  : 'Things to Do',
            tasks : {
                do       : [],
                plan     : [],
                delegate : [],
                delay    : []
            }
        };
    },

    onAddGrid : function(name)
    {
        this.grids.push({
            name  : name,
            tasks : {
                do       : [],
                plan     : [],
                delegate : [],
                delay    : []
            }
        });

        saveToLocalStorage(this.grids);

        this.emit('change');
    },

    onAddTask : function(task)
    {
        var grid = this.grids[task.grid];

        grid.tasks[task.quadrant].push({
            task      : task.task,
            completed : false
        });

        saveToLocalStorage(this.grids);

        this.emit('change');
    },

    onRemoveTask : function(task)
    {
        this.grids[task.grid].tasks[task.quadrant].splice(task.id, 1);

        this.emit('change');
    },

    onSelectGrid : function(index)
    {
        this.selectedGrid = index;

        this.emit('change');
    },

    saveToLocalStorage : function()
    {
        store.set('grids', this.grids);
    },

    getAll : function()
    {
        return this.grids;
    },

    getTasksForSelectedGrid : function()
    {
        return this.grids[this.selectedGrid].tasks;
    },

    getSelectedGrid : function()
    {
        return this.selectedGrid;
    }
});
