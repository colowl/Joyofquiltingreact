import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer className="belly">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2">
                        
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                       
                        <h5>Pages</h5>
                        <ul className="list-unstyled">
                            <li><a href="/HomeComponent">Home</a></li>
                            <li><a href="/commissionsPage">Commissions</a></li>
                            <li><a href="/previousworks">Previous Works</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Find Me Here</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                class="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                class="fa fa-twitter"></i></a>
                    </div>
                    
                    <div className="col-sm-4 col-sm-2 offset-1 text-center">
                        <a role="button" className="btn btn-link" href="mailto:animusfuro@gmail.com"><i
                                className="fa fa-envelope-o fa-lg text-primary"></i> animusfuro@gmail.com</a>
                   
                    </div>
                </div>
            </div>
            
        </footer>
        );
    }
}

export default Footer;
