import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
//import Contact from './ContactComponent';
import Commissions from './CommissionsComponent';
import PreviousWorks from './PreviousWorksComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        //campsites: state.campsites
    };
};

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