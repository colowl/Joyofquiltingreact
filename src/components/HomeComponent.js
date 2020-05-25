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
                <Blog />
            </div>
        );
    }
}

export default Home;