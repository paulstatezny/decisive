'use strict';

var _               = require('underscore');
var React           = require('react');
var Quadrant        = require('./quadrant');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend    = require('react-dnd/modules/backends/HTML5');

var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

var ITEMS = [
    {
        task      : 'Create React app version of static HTML',
        completed : true
    },
    {
        task      : 'Wire up components',
        completed : false
    },
    {
        task      : 'Implement design feedback',
        completed : false
    },
    {
        task      : 'Polish design',
        completed : false
    },
    {
        task      : 'Implement single-column layout',
        completed : false
    }
];

var Grid = React.createClass({
    displayName : 'Grid',

    mixins : [FluxMixin],

    propTypes : {
        tasks : React.PropTypes.shape({
            do       : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
            plan     : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
            delegate : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
            delay    : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        }).isRequired,
        id : React.PropTypes.number
    },

    addTask : function(quadrant, task)
    {
        this.getFlux().actions.addTask(this.props.id, quadrant, task);
    },

    removeTask : function(quadrant, taskId)
    {
        this.getFlux().actions.removeTask(this.props.id, quadrant, taskId);
    },

    moveTask : function(dropQuadrant, dragQuadrant, task, taskId)
    {
        this.getFlux().actions.addTask(this.props.id, dropQuadrant, task);
        this.getFlux().actions.removeTask(this.props.id, dragQuadrant, taskId);
    },

    toggleCompleted : function(quadrant, taskId)
    {
        this.getFlux().actions.toggleCompleted(this.props.id, quadrant, taskId);
    },

    render : function()
    {
        return (
            <div className='grid'>
                <Quadrant
                    name            = 'do'
                    className       = 'grid__quadrant--do'
                    hint            = 'Do these things now.'
                    tasks           = {this.props.tasks.do}
                    addTask         = {_.partial(this.addTask, 'do')}
                    removeTask      = {_.partial(this.removeTask, 'do')}
                    moveTask        = {_.partial(this.moveTask, 'do')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'do')}
                />
                <Quadrant
                    name            = 'plan'
                    className       = 'grid__quadrant--plan'
                    hint            = 'Plan a time to do these later.'
                    tasks           = {this.props.tasks.plan}
                    addTask         = {_.partial(this.addTask, 'plan')}
                    removeTask      = {_.partial(this.removeTask, 'plan')}
                    moveTask        = {_.partial(this.moveTask, 'plan')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'plan')}
                />
                <Quadrant
                    name            = 'delegate'
                    className       = 'grid__quadrant--delegate'
                    hint            = 'Is someone else available to do these?'
                    tasks           = {this.props.tasks.delegate}
                    addTask         = {_.partial(this.addTask, 'delegate')}
                    removeTask      = {_.partial(this.removeTask, 'delegate')}
                    moveTask        = {_.partial(this.moveTask, 'delegate')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'delegate')}
                />
                <Quadrant
                    name            = 'delay'
                    className       = 'grid__quadrant--later'
                    hint            = 'Save these tasks for your free time.'
                    tasks           = {this.props.tasks.delay}
                    addTask         = {_.partial(this.addTask, 'delay')}
                    removeTask      = {_.partial(this.removeTask, 'delay')}
                    moveTask        = {_.partial(this.moveTask, 'delay')}
                    toggleCompleted = {_.partial(this.toggleCompleted, 'delay')}
                />
            </div>
        );
    }
});

module.exports = new DragDropContext(HTML5Backend)(Grid);
