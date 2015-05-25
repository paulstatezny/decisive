'use strict';

var React = require('react');

class Logo extends React.Component
{
    render()
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
}

export default Logo;
