'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'Logo',

    render : function()
    {
        return (
            <h1 className='logo'>
                <div className='logo__block logo__block--top-left'></div>
                <div className='logo__block logo__block--bottom-left'></div>
                <span>Decisive</span>
                <div className='logo__block logo__block--top-right'></div>
                <div className='logo__block logo__block--bottom-right'></div>
            </h1>
        );
    }
});
