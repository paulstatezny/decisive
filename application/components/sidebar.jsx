'use strict';

var React = require('react');
var PT    = React.PropTypes;
var Logo  = require('./logo');

module.exports = React.createClass({
    displayName : 'Sidebar',

    propTypes : {
        grids : PT.arrayOf(
            PT.shape({name : PT.string})
        ).isRequired
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
                    </ul>
                </div>
            </nav>
        );
    }
});
