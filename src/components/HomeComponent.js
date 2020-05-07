import React, { Component } from 'react';
//will import blog component here

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Home Page Goes Here!</h1>
                {/*eventually blog will go here*/}
            </div>
        );
    }
}

export default Home;