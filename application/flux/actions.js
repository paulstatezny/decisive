'use strict';

module.exports = {
    addGrid(name)
    {
        this.dispatch('ADD_GRID', name);
    },

    addTask(grid, quadrant, task)
    {
        this.dispatch('ADD_TASK', {grid, quadrant, task});
    },

    toggleCompleted(grid, quadrant, id)
    {
        this.dispatch('TOGGLE_COMPLETED', {grid, quadrant, id});
    },

    removeTask(grid, quadrant, id)
    {
        this.dispatch('REMOVE_TASK', {grid, quadrant, id});
    },

    selectGrid(index)
    {
        this.dispatch('SELECT_GRID', index);
    },

    deleteGrid(index)
    {
        this.dispatch('DELETE_GRID', index);
    }
};
