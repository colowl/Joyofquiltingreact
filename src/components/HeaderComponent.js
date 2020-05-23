import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div class="row">
                        <div className="col center centered-text mx-auto header-title">
                            <h1>The Joy of Quilting Art Woot</h1>
                            <h2>by Jamie Rowen</h2>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
