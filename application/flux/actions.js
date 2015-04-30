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
    }
};
