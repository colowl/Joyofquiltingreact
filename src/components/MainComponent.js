import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
//import Contact from './ContactComponent';
import Commissions from './CommissionsComponent';
import PreviousWorks from './PreviousWorksComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/commissions' component={Commissions} />
                    <Route exact path='/previousworks' component={PreviousWorks} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;