'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'ListItem',

    propTypes : {
        task            : React.PropTypes.string.isRequired,
        completed       : React.PropTypes.bool.isRequired,
        removeItem      : React.PropTypes.func.isRequired,
        toggleCompleted : React.PropTypes.func.isRequired
    },

    render : function()
    {
        var classes = this.props.completed ? 'checklist__item--checked' : '';

        return (
            <li className={classes}>
                <label>
                    <input type='checkbox' checked={this.props.completed} onClick={this.props.toggleCompleted} />
                    {this.props.task}
                </label>
                <span className='checklist__item__close-button' onClick={this.props.removeItem}>X</span>
            </li>
        );
    }
});
