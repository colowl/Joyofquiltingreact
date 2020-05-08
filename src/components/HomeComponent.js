import React, { Component } from 'react';
import Blog from './BlogComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Home Page Goes Here!</h1>
                {/*blog*/}
                <Blog />
            </div>
        );
    }
}

export default Home;