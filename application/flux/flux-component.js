'use strict';

var React = require('react');
var _     = require('lodash');

class FluxComponent extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.getFlux              = this.getFlux.bind(this);
        this.componentDidMount    = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this._setStateFromFlux    = this._setStateFromFlux.bind(this);
        this.getChildContext      = this.getChildContext.bind(this);
    }

    getFlux()
    {
        return this.props.flux || (this.context && this.context.flux);
    }

    componentDidMount()
    {
        var flux = this.getFlux();

        _.forEach(this.watchedStores, function(store) {
            flux.store(store).on('change', this._setStateFromFlux);
        }, this);
    }

    componentWillUnmount()
    {
        var flux = this.getFlux();

        _.forEach(this.watchedStores, function(store) {
            flux.store(store).removeListener('change', this._setStateFromFlux);
        }, this);
    }

    _setStateFromFlux()
    {
        this.setState(this.getStateFromFlux());
    }

    getChildContext()
    {
        return {flux : this.getFlux()};
    }
}

FluxComponent.contextTypes = {
    flux : React.PropTypes.object
};

FluxComponent.childContextTypes = {
    flux : React.PropTypes.object
};

module.exports = FluxComponent;
