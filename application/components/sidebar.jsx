/* global prompt */
'use strict';

var React     = require('react');
var PT        = React.PropTypes;
var Logo      = require('./logo');
var FluxMixin = require('fluxxor').FluxMixin(React);

module.exports = React.createClass({
    displayName : 'Sidebar',

    mixins : [FluxMixin],

    propTypes : {
        grids : PT.arrayOf(
            PT.shape({name : PT.string})
        ).isRequired
    },

    addGrid : function()
    {
        var gridName = prompt('Enter the name of the grid');

        this.getFlux().actions.addGrid(gridName);
    },

    renderGrids : function()
    {
        return this.props.grids.map(function (grid) {
            return (
                <li>
                    <a>{grid.name}</a>
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
