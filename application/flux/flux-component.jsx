'use strict';

var React = require('react');
var _     = require('lodash');

/**
 * Flux wrapper for a component
 *
 * Usage (at bottom of component file):
 *     export default Flux(SomeOtherComponent)
 *
 * @param  {Component} ComposedComponent Component to wrap
 * @param  {Array}     watchedStores     Stores to watch
 * @param  {Function}  getStateFromFlux  Function that receives the Flux object and returns state set from Flux
 */
export default (ComposedComponent, watchedStores, getStateFromFlux) =>
{
    let FluxClass = class extends React.Component
    {
        constructor(props, context)
        {
            super(props, context);

            this.getFlux              = this.getFlux.bind(this);
            this.componentDidMount    = this.componentDidMount.bind(this);
            this.componentWillUnmount = this.componentWillUnmount.bind(this);
            this.setStateFromFlux     = this.setStateFromFlux.bind(this);

            if (getStateFromFlux) {
                this.state = getStateFromFlux(this.getFlux());
            }
        }

        getFlux()
        {
            return this.props.flux || (this.context && this.context.flux);
        }

        componentDidMount()
        {
            var flux = this.getFlux();

            _.forEach(watchedStores, (store) => {
                flux.store(store).on('change', this.setStateFromFlux);
            });
        }

        componentWillUnmount()
        {
            var flux = this.getFlux();

            _.forEach(watchedStores, (store) => {
                flux.store(store).removeListener('change', this.setStateFromFlux);
            });
        }

        setStateFromFlux()
        {
            if (! getStateFromFlux) {
                return;
            }

            let component = this.refs ? this.refs.component || {} : {};

            this.setState(getStateFromFlux(this.getFlux(), component.props, component.state));
        }

        render()
        {
            if (getStateFromFlux && ! this.state) {
                return null;
            }

            return (
                <ComposedComponent {...this.props} {...this.state} flux={this.getFlux()} ref='component' />
            );
        }
    };

    FluxClass.contextTypes = {
        flux : React.PropTypes.object
    };

    FluxClass.childContextTypes = {
        flux : React.PropTypes.object
    };

    return FluxClass;
};
