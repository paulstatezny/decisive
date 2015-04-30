'use strict';

var React    = require('react');
var Quadrant = require('./components/quadrant');

require('./css/app');

module.exports = React.createClass({
    displayName : 'DecisiveApplication',

    render : function()
    {
        return (
            <div className="container">
                <nav className="sidebar">
                    <h1 className="logo">
                        <div className="logo__block logo__block--top-left"></div>
                        <div className="logo__block logo__block--bottom-left"></div>
                        <span>Decisive</span>
                        <div className="logo__block logo__block--top-right"></div>
                        <div className="logo__block logo__block--bottom-right"></div>
                    </h1>

                    <div>
                        <h3>Grids</h3>
                        <ul>
                            <li><a href="">Work</a></li>
                            <li><a href="">Outside Work</a></li>
                            <li><a href="">Weekends</a></li>
                            <li><a href="">New Grid</a></li>
                        </ul>
                    </div>

                </nav>
                <main className="content">
                    <div className="content__top-gutter">
                        <div className="top-gutter__corner"></div>
                        <div className="top-gutter__main">
                            <div className="top-gutter__header top-gutter__header--blue priority-label">Urgent</div>
                            <div className="top-gutter__header priority-label">Not Urgent</div>
                        </div>
                    </div>
                    <div className="content__under-top-gutter">
                        <div className="left-gutter">
                            <div className="left-gutter__header left-gutter__header--blue">
                                <span className="left-gutter__header__text left-gutter__header__text--top priority-label">Important</span>
                            </div>
                            <div className="left-gutter__header">
                                <span className="left-gutter__header__text left-gutter__header__text--bottom priority-label">Not Important</span>
                            </div>
                        </div>
                        <div className="grid">
                            <Quadrant
                                className = 'grid__quadrant--do'
                                hint      = 'Do these things now.'
                            />
                            <Quadrant
                                className = 'grid__quadrant--plan'
                                hint      = 'Plan a time to do these later.'
                            />
                            <Quadrant
                                className = 'grid__quadrant--delegate'
                                hint      = 'Is someone else available to do these?'
                            />
                            <Quadrant
                                className = 'grid__quadrant--later'
                                hint      = 'Save these items for your free time.'
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
});
