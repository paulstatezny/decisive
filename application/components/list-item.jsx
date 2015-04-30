'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'ListItem',

    propTypes : {
        task      : React.PropTypes.string.isRequired,
        completed : React.PropTypes.bool.isRequired
    },

    render : function()
    {
        var classes = this.props.completed ? 'checklist__item--checked' : '';

        return (
            <li className={classes}>
                <label>
                    <input type='checkbox' checked={this.props.completed} />
                    {this.props.task}
                </label>
                <span className='checklist__item__close-button'>X</span>
            </li>
        );
    }
});
