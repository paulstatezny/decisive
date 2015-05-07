/* global prompt */
'use strict';

var _               = require('underscore');
var React           = require('react');
var PT              = React.PropTypes;
var Logo            = require('./logo');
var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

module.exports = React.createClass({
    displayName : 'Sidebar',

    mixins : [FluxMixin, new StoreWatchMixin('grid')],

    propTypes : {
        grids : PT.arrayOf(
            PT.shape({name : PT.string})
        ).isRequired
    },

    getStateFromFlux : function()
    {
        return {
            selectedGrid : this.getFlux().store('grid').getSelectedGrid()
        };
    },

    addGrid : function()
    {
        var gridName = prompt('Enter the name of the grid');

        this.getFlux().actions.addGrid(gridName);
    },

    selectGrid : function(gridIndex)
    {
        this.getFlux().actions.selectGrid(gridIndex);
    },

    renderGrids : function()
    {
        var selectedGrid = this.state.selectedGrid,
            selectGrid   = this.selectGrid;

        return this.props.grids.map(function (grid, index) {
            var selected = (index === selectedGrid) ? '*' : '';

            return (
                <li onClick={_(selectGrid).partial(index)} key={'grid-' + index}>
                    <a>{grid.name}{selected}</a>
                </li>
            );
        });
    },

    render : function()
    {
        return (
            <nav className='sidebar'>
                <Logo />
                <div>
                    <h3>Grids</h3>
                    <ul>
                        {this.renderGrids()}
                        <li onClick={this.addGrid}>Add Grid</li>
                    </ul>
                </div>
            </nav>
        );
    }
});
