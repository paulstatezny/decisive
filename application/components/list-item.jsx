'use strict';

var React = require('react');
var ItemTypes = require('./constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;

var listItemSource = {
  beginDrag: function (props, monitor) {
    return {
        index        : props.index,
        task         : props.task,
        dragQuadrant : props.quadrant
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var ListItem = React.createClass({
    displayName : 'ListItem',

    propTypes : {
        index             : React.PropTypes.number.isRequired,
        quadrant          : React.PropTypes.string.isRequired,
        task              : React.PropTypes.string.isRequired,
        completed         : React.PropTypes.bool.isRequired,
        removeItem        : React.PropTypes.func.isRequired,
        toggleCompleted   : React.PropTypes.func.isRequired,
        connectDragSource : React.PropTypes.func.isRequired,
        isDragging        : React.PropTypes.bool.isRequired
    },

    render : function()
    {
        var classes = this.props.completed ? 'checklist__item--checked' : '';
        var connectDragSource = this.props.connectDragSource;
        var isDragging = this.props.isDragging;

        return connectDragSource(
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

module.exports = new DragSource(ItemTypes.LISTITEM, listItemSource, collect)(ListItem);
