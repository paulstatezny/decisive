'use strict';

var _             = require('lodash');
var React         = require('react');
var Sidebar       = require('./components/sidebar');
var Grid          = require('./components/grid');
var FluxComponent = require('./flux/flux-component');

import Flux from './flux/flux-component';

require('!file-loader?name=[path][name].[ext]!../images/favicon.ico');
require('./css/app');

class DecisiveApplication extends React.Component
{
    constructor(props)
    {
        super(props);

        this.watchedStores = ['grid'];
        this.state = this.getStateFromFlux();
    }

    getStateFromFlux()
    {
        return {
            grids        : this.getFlux().store('grid').getAll(),
            selectedGrid : this.getFlux().store('grid').getSelectedGrid(),
            tasks        : this.getFlux().store('grid').getTasksForSelectedGrid()
        };
    }

    render()
    {
        return (
            <div className='container'>
                <Sidebar grids={this.state.grids} />
                <main className='content'>
                    <div className='content__top-gutter'>
                        <div className='top-gutter__corner'></div>
                        <div className='top-gutter__main'>
                            <div className='top-gutter__header top-gutter__header--blue priority-label'>Urgent</div>
                            <div className='top-gutter__header priority-label'>Not Urgent</div>
                        </div>
                    </div>
                    <div className='content__under-top-gutter'>
                        <div className='left-gutter'>
                            <div className='left-gutter__header left-gutter__header--blue'>
                                <span className='left-gutter__header__text left-gutter__header__text--top priority-label'>Important</span>
                            </div>
                            <div className='left-gutter__header'>
                                <span className='left-gutter__header__text left-gutter__header__text--bottom priority-label'>Not Important</span>
                            </div>
                        </div>
                        <Grid tasks={this.state.tasks} id={this.state.selectedGrid} flux={this.props.flux} />
                    </div>
                </main>
            </div>
        );
    }
}

DecisiveApplication.contextTypes = {
    flux : React.PropTypes.object
};

export default DecisiveApplication;
