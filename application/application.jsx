'use strict';

var React = require('react');

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
                            <div className="grid__quadrant grid__quadrant--do">
                                <p className="quadtrant__hint">Do these things now.</p>
                                <ul className="checklist">
                                    <li><label className="checked"><input type="checkbox" /> Chill out</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Max out</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Relax all cool</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Shoot some b-ball out by the school</label><span className="checklist__item--close-button">X</span></li>
                                    <li className="add-new">
                                        <input type="checkbox" />
                                        <input id="new" type="text" placeholder="Click to add item..." />
                                    </li>
                                </ul>
                            </div>

                            <div className="grid__quadrant grid__quadrant--plan">
                                <p className="quadtrant__hint">Plan a time to do these later.</p>
                                <ul className="checklist">
                                    <li><label><input type="checkbox" /> World Domination</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Escape from lab</label><span className="checklist__item--close-button">X</span></li>
                                    <li className="add-new">
                                        <input type="checkbox" />
                                        <input id="new" type="text" placeholder="Click to add item..."/>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid__quadrant grid__quadrant--delegate">
                                <p className="quadtrant__hint">Is someone else available to do these?</p>
                                <ul className="checklist">
                                    <li><label><input type="checkbox" /> Clean bathroom</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Do dishes</label><span className="checklist__item--close-button">X</span></li>
                                    <li className="add-new">
                                        <input type="checkbox" />
                                        <input id="new" type="text" placeholder="Click to add item..."/>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid__quadrant grid__quadrant--later">
                                <p className="quadtrant__hint">Save these items for your free time.</p>
                                <ul className="checklist">
                                    <li><label><input type="checkbox" /> Chill more</label><span className="checklist__item--close-button">X</span></li>
                                    <li><label><input type="checkbox" /> Relax even cooler</label><span className="checklist__item--close-button">X</span></li>
                                    <li className="add-new">
                                        <input type="checkbox" />
                                        <input id="new" type="text" placeholder="Click to add item..." />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
});
