import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardImg, CardText, CardBody, Media, CardTitle, CardColumns, Button } from 'reactstrap';
import React from 'react';
//Do we want this to eventually be a component that pulls from an object of all the blog posts...?
//This is imported into the HomeComponent
const baseImgUrl = '../shared/images/';

function Blog(props) {
    return (

        <React.Fragment>
            <Media>

                <Media body>
                    <Media left href="#">
                        <Media object top width="20%" src={require('../shared/images/planning.jpg')} alt="preparing to cut quilt fabric" />
                    </Media>
                    <Media heading>
                        Media heading
                    </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src={require('../shared/images/planning.jpg')} alt="preparing to cut quilt fabric" />
                    <CardBody>
                        <CardTitle><p className="blog-title">The Art of Quilting Art</p></CardTitle>
                        <CardText className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</CardText>
                        <Button href="https://www.lipsum.com/" color="primary">Read More</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={require('../shared/images/squares.jpg')} alt="preparing to cut quilt fabric" />
                    <CardBody>
                        <CardTitle><p className="blog-title">What to Do With Scraps</p></CardTitle>
                        <CardText className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</CardText>
                        <Button href="https://www.lipsum.com/" color="primary">Read More</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={require('../shared/images/freestyle.jpg')} alt="preparing to cut quilt fabric" />                    <CardBody>
                        <CardTitle><p className="blog-title">The Twists and Turns of Quilting: Piecing It Together</p></CardTitle>
                        <CardText className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</CardText>
                        <Button href="https://www.lipsum.com/" color="primary">Read More</Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </React.Fragment >


    );
}

export default Blog;