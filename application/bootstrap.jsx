/* global window, require */
'use strict';

var React       = require('react');
var Application = require('./application');
var flux        = require('./flux');

class FluxApplication extends React.Component {
    getChildContext()
    {
        return {
            foo : 'bar'
        };
    }

    render()
    {
        return <Application />;
    }
}

FluxApplication.childContextTypes = {
    foo : React.PropTypes.object
};

React.render(
    React.createElement(FluxApplication),
    window.document.body
);
