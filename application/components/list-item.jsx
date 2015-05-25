'use strict';

var React = require('react');

class ListItem extends React.Component
{
    render()
    {
        let classes = this.props.completed ? 'checklist__item--checked' : '';

        return (
            <li className={classes}>
                <label>
                    <input type='checkbox' checked={this.props.completed} onChange={this.props.toggleCompleted} />
                    {this.props.task}
                </label>
                <span className='checklist__item__close-button' onClick={this.props.removeItem}>X</span>
            </li>
        );
    }
}

ListItem.propTypes = {
    task            : React.PropTypes.string.isRequired,
    completed       : React.PropTypes.bool.isRequired,
    removeItem      : React.PropTypes.func.isRequired,
    toggleCompleted : React.PropTypes.func.isRequired
};

export default ListItem;
