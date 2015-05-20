'use strict';

var _        = require('underscore');
var React    = require('react');
var ListItem = require('./list-item');
var ItemTypes = require('./constants').ItemTypes;
var DropTarget = require('react-dnd').DropTarget;

var quadrantTarget = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    props.moveTask(item.dragQuadrant, item.task, item.index);
  }
};

function collect(connect, monitor) {
    return {
        connectDropTarget : connect.dropTarget(),
        isOver            : monitor.isOver()
    };
}

var Quadrant = React.createClass({
    displayName : 'Quadrant',

    propTypes : {
        name       : React.PropTypes.string.isRequired,
        className  : React.PropTypes.string.isRequired,
        hint       : React.PropTypes.string.isRequired,
        tasks      : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        addTask    : React.PropTypes.func.isRequired,
        removeTask : React.PropTypes.func.isRequired,
        isOver     : React.PropTypes.bool.isRequired
    },

    getInitialState : function()
    {
        return {
            newTaskText : ''
        };
    },

    renderItems : function()
    {
        var removeTask, toggleCompleted, quadrantName;

        removeTask      = this.props.removeTask;
        toggleCompleted = this.props.toggleCompleted;
        quadrantName    = this.props.name;

        return this.props.tasks.map(function (item, index) {
            return (
                <ListItem
                    index           = {index}
                    quadrant        = {quadrantName}
                    task            = {item.task}
                    completed       = {item.completed}
                    toggleCompleted = {_.partial(toggleCompleted, index)}
                    removeItem      = {_.partial(removeTask, index)}
                    key             = {'task-' + index}
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
        var isOver = this.props.isOver,
            connectDropTarget = this.props.connectDropTarget,
            divClassName = 'grid__quadrant ' + this.props.className;

        if (isOver) {
            divClassName += ' grid__quadrant--hover';
        }

        return connectDropTarget(
            <div className={divClassName}>
                <p className='quadtrant__hint'>{this.props.hint}</p>
                <ul className='checklist'>
                    {this.renderItems()}
                    <li className='add-new'>
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

module.exports = new DropTarget(ItemTypes.LISTITEM, quadrantTarget, collect)(Quadrant);
