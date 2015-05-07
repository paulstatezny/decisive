'use strict';

var _        = require('underscore');
var React    = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    displayName : 'Quadrant',

    propTypes : {
        className  : React.PropTypes.string.isRequired,
        hint       : React.PropTypes.string.isRequired,
        tasks      : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        addTask    : React.PropTypes.func.isRequired,
        removeTask : React.PropTypes.func.isRequired
    },

    getInitialState : function()
    {
        return {
            newTaskText : ''
        };
    },

    renderItems : function()
    {
        var removeTask = this.props.removeTask;

        return this.props.tasks.map(function (item, index) {
            return (
                <ListItem
                    task       = {item.task}
                    completed  = {item.completed}
                    removeItem = {_.partial(removeTask, index)}
                    key        = {'task-' + index}
                />
            );
        });
    },

    updateNewTaskText : function(event)
    {
        this.setState({
            newTaskText : event.target.value
        });
    },

    addTask : function(event)
    {
        event.preventDefault();

        if (! this.state.newTaskText) {
            return;
        }

        this.props.addTask(this.state.newTaskText);

        this.setState({
            newTaskText : ''
        });
    },

    render : function()
    {
        return (
            <div className={'grid__quadrant ' + this.props.className}>
                <p className='quadtrant__hint'>{this.props.hint}</p>
                <ul className='checklist'>
                    {this.renderItems()}
                    <li className='add-new'>
                        <input type='checkbox' checked={false} />
                        <form onSubmit={this.addTask}>
                            <input
                                id          = 'new'
                                type        = 'text'
                                placeholder = 'Click to add item...'
                                value       = {this.state.newTaskText}
                                onChange    = {this.updateNewTaskText}
                            />
                        </form>
                    </li>
                </ul>
            </div>
        );
    }
});
