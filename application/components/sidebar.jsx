/* global prompt, window */
'use strict';

var _               = require('underscore');
var React           = require('react');
var PT              = React.PropTypes;
var Logo            = require('./logo');
var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;
var FluxComponent   = require('../flux/flux-component');

class Sidebar extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        this.addGrid     = this.addGrid.bind(this);
        this.selectGrid  = this.selectGrid.bind(this);
        this.renderGrids = this.renderGrids.bind(this);
        this.deleteGrid  = this.deleteGrid.bind(this);
    }

    addGrid()
    {
        var gridName = prompt('Enter the name of the grid');

        if (!! gridName) {
            this.props.flux.actions.addGrid(gridName);
        }
    }

    selectGrid(gridIndex)
    {
        this.props.flux.actions.selectGrid(gridIndex);
    }

    deleteGrid(gridIndex, e)
    {
        e.stopPropagation();

        if (window.confirm('Are you sure you want to delete this grid?')) {
            this.props.flux.actions.deleteGrid(gridIndex);
        }
    }

    renderGrids()
    {
        var selectedGrid = this.props.selectedGrid,
            selectGrid   = this.selectGrid;

        return this.props.grids.map((grid, index) => {
            var selected = (index === selectedGrid) ? '*' : '';

            return (
                <li onClick={_(selectGrid).partial(index)} key={'grid-' + index}>
                    <a>
                        <span className='sidebar__delete-button' onClick={_(this.deleteGrid).partial(index)}>
                            X
                        </span>
                        {' ' + grid.name}
                        {selected}
                    </a>
                </li>
            );
        });
    }

    render()
    {
        return (
            <nav className='sidebar'>
                <Logo />
                <div>
                    <h3>Grids</h3>
                    <ul>
                        {this.renderGrids()}
                        <li onClick={this.addGrid}>Add Grid</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Sidebar.propTypes = {
    grids : PT.arrayOf(
        PT.shape({name : PT.string})
    ).isRequired,
    selectedGrid : PT.number.isRequired
};

export default FluxComponent(Sidebar, ['grid'], flux => ({
    selectedGrid : flux.store('grid').getSelectedGrid()
}));
