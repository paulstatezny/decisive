'use strict';

let React = require('react');

class FluxComponent extends React.Component {
    getFlux()
    {
        return this.props.flux || (this.context && this.context.flux);
    }
}

FluxComponent.contextTypes = {
    flux : React.PropTypes.object
};

FluxComponent.childContextTypes = {
    flux : React.PropTypes.object
};

module.exports = FluxComponent;
