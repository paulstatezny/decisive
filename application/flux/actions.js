'use strict';

module.exports = {
    addGrid : function(name)
    {
        this.dispatch('ADD_GRID', name);
    }
};
