'use strict';

var React = require('react');
var PT    = React.PropTypes;

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
                <h1 className='logo'>
                    <div className='logo__block logo__block--top-left'></div>
                    <div className='logo__block logo__block--bottom-left'></div>
                    <span>Decisive</span>
                    <div className='logo__block logo__block--top-right'></div>
                    <div className='logo__block logo__block--bottom-right'></div>
                </h1>
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
