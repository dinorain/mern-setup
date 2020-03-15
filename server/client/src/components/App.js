import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './Landing';

class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect()(App);