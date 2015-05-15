'use strict';

module.exports = {
    addGrid : function(name)
    {
        this.dispatch('ADD_GRID', name);
    },

    addTask : function(grid, quadrant, task)
    {
        this.dispatch('ADD_TASK', {
            grid     : grid,
            quadrant : quadrant,
            task     : task
        });
    },

    toggleCompleted : function(grid, quadrant, taskId)
    {
        this.dispatch('TOGGLE_COMPLETED', {
            grid     : grid,
            quadrant : quadrant,
            id       : taskId
        });
    },

    removeTask : function(grid, quadrant, taskId)
    {
        this.dispatch('REMOVE_TASK', {
            grid     : grid,
            quadrant : quadrant,
            id       : taskId
        });
    },

    selectGrid : function(index)
    {
        this.dispatch('SELECT_GRID', index);
    }
};
