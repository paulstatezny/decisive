'use strict';

var _        = require('underscore');
var React    = require('react');
var Quadrant = require('./quadrant');

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

module.exports = React.createClass({
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

    render : function()
    {
        return (
            <div className='grid'>
                <Quadrant
                    className = 'grid__quadrant--do'
                    hint      = 'Do these things now.'
                    tasks     = {this.props.tasks.do}
                    addTask   = {_.partial(this.addTask, 'do')}
                />
                <Quadrant
                    className = 'grid__quadrant--plan'
                    hint      = 'Plan a time to do these later.'
                    tasks     = {this.props.tasks.plan}
                    addTask   = {_.partial(this.addTask, 'plan')}
                />
                <Quadrant
                    className = 'grid__quadrant--delegate'
                    hint      = 'Is someone else available to do these?'
                    tasks     = {this.props.tasks.delegate}
                    addTask   = {_.partial(this.addTask, 'delegate')}
                />
                <Quadrant
                    className = 'grid__quadrant--later'
                    hint      = 'Save these tasks for your free time.'
                    tasks     = {this.props.tasks.delay}
                    addTask   = {_.partial(this.addTask, 'delay')}
                />
            </div>
        );
    }
});
