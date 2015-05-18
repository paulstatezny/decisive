'use strict';

var _        = require('underscore');
var React    = require('react');
var ListItem = require('./list-item');

class Quadrant extends React.Component
{
    constructor()
    {
        super();

        this.updateNewTaskText = this.updateNewTaskText.bind(this);
        this.addTask           = this.addTask.bind(this);

        this.state = {newTaskText : ''};
    }

    renderItems()
    {
        var removeTask, toggleCompleted;

        removeTask      = this.props.removeTask;
        toggleCompleted = this.props.toggleCompleted;

        return this.props.tasks.map(function (item, index) {
            return (
                <ListItem
                    task            = {item.task}
                    completed       = {item.completed}
                    toggleCompleted = {_.partial(toggleCompleted, index)}
                    removeItem      = {_.partial(removeTask, index)}
                    key             = {'task-' + index}
                />
            );
        });
    }

    updateNewTaskText(event)
    {
        this.setState({
            newTaskText : event.target.value
        });
    }

    addTask(event)
    {
        event.preventDefault();

        if (! this.state.newTaskText) {
            return;
        }

        this.props.addTask(this.state.newTaskText);

        this.setState({
            newTaskText : ''
        });
    }

    render()
    {
        return (
            <div className={'grid__quadrant ' + this.props.className}>
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
}

Quadrant.propTypes = {
    className  : React.PropTypes.string.isRequired,
    hint       : React.PropTypes.string.isRequired,
    tasks      : React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    addTask    : React.PropTypes.func.isRequired,
    removeTask : React.PropTypes.func.isRequired
};

module.exports = Quadrant;
