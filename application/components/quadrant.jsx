'use strict';

var React    = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    displayName : 'Quadrant',

    propTypes : {
        className : React.PropTypes.string.isRequired,
        hint      : React.PropTypes.string.isRequired,
        tasks     : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },

    renderItems : function()
    {
        return this.props.tasks.map(function (item) {
            return (
                <ListItem task={item.task} completed={item.completed} />
            );
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
                        <input id='new' type='text' placeholder='Click to add item...' />
                    </li>
                </ul>
            </div>
        );
    }
});
