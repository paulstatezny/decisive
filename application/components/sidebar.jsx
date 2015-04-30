'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'Sidebar',

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
                        <li><a>Work</a></li>
                        <li><a>Outside Work</a></li>
                        <li><a>Weekends</a></li>
                        <li><a>New Grid</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});
