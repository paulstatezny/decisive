/* global window, require */
'use strict';

var React       = require('react');
var Application = require('./application');
var flux        = require('./flux');

class FluxApplication extends React.Component
{
    getChildContext()
    {
        return {
            flux : flux
        };
    }

    render()
    {
        return <Application flux={flux} />;
    }
}

FluxApplication.childContextTypes = {
    flux : React.PropTypes.object
};

React.render(
    <FluxApplication />,
    window.document.body
);
