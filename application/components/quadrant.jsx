'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'Quadrant',

    propTypes : {
        className : React.PropTypes.string.isRequired,
        hint      : React.PropTypes.string.isRequired
    },

    render : function()
    {
        return (
            <div className={'grid__quadrant ' + this.props.className}>
                <p className="quadtrant__hint">{this.props.hint}</p>
                <ul className="checklist">
                    <li><label><input type="checkbox" /> Chill more</label><span className="checklist__item--close-button">X</span></li>
                    <li><label><input type="checkbox" /> Relax even cooler</label><span className="checklist__item--close-button">X</span></li>
                    <li className="add-new">
                        <input type="checkbox" />
                        <input id="new" type="text" placeholder="Click to add item..." />
                    </li>
                </ul>
            </div>
        );
    }
});
