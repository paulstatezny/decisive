'use strict';

var React   = require('react');
var Sidebar = require('./components/sidebar');
var Grid    = require('./components/grid');

require('./css/app');

module.exports = React.createClass({
    displayName : 'DecisiveApplication',

    render : function()
    {
        return (
            <div className="container">
                <Sidebar />
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
                        <Grid />
                    </div>
                </main>
            </div>
        );
    }
});
