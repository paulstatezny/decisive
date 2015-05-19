'use strict';

var _         = require('lodash');
var React     = require('react');
var PT        = React.PropTypes;
var Quadrant  = require('./quadrant');
var FluxMixin = require('fluxxor').FluxMixin(React);

class Grid extends React.Component
{
    constructor(props)
    {
        super(props);

        _.assign(this, FluxMixin);
        _.bindAll(this);
    }

    addTask(quadrant, task)
    {
        this.getFlux().actions.addTask(this.props.id, quadrant, task);
    }

    removeTask(quadrant, taskId)
    {
        this.getFlux().actions.removeTask(this.props.id, quadrant, taskId);
    }

    toggleCompleted(quadrant, taskId)
    {
        this.getFlux().actions.toggleCompleted(this.props.id, quadrant, taskId);
    }

    render()
    {
        return (
            <div className='grid'>
                <Quadrant
                    className       = 'grid__quadrant--do'
                    hint            = 'Do these things now.'
                    tasks           = {this.props.tasks.do}
                    addTask         = {_.partial(this.addTask, 'do')}
                    removeTask      = {_.partial(this.removeTask, 'do')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'do')}
                />
                <Quadrant
                    className       = 'grid__quadrant--plan'
                    hint            = 'Plan a time to do these later.'
                    tasks           = {this.props.tasks.plan}
                    addTask         = {_.partial(this.addTask, 'plan')}
                    removeTask      = {_.partial(this.removeTask, 'plan')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'plan')}
                />
                <Quadrant
                    className       = 'grid__quadrant--delegate'
                    hint            = 'Is someone else available to do these?'
                    tasks           = {this.props.tasks.delegate}
                    addTask         = {_.partial(this.addTask, 'delegate')}
                    removeTask      = {_.partial(this.removeTask, 'delegate')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'delegate')}
                />
                <Quadrant
                    className       = 'grid__quadrant--later'
                    hint            = 'Save these tasks for your free time.'
                    tasks           = {this.props.tasks.delay}
                    addTask         = {_.partial(this.addTask, 'delay')}
                    removeTask      = {_.partial(this.removeTask, 'delay')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'delay')}
                />
            </div>
        );
    }
}

Grid.propTypes = {
    tasks : PT.shape({
        do       : PT.arrayOf(PT.object).isRequired,
        plan     : PT.arrayOf(PT.object).isRequired,
        delegate : PT.arrayOf(PT.object).isRequired,
        delay    : PT.arrayOf(PT.object).isRequired
    }).isRequired,
    id : PT.number
};

Grid.contextTypes = {
    flux : React.PropTypes.object
};

module.exports = Grid;
