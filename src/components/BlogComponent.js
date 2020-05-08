
import React from 'react';

//We need to some how get this stuff to plug in to the homecomponent.
//Do we want this to eventually be a component that pulls from an object of all the blog posts...?
//It is not currently linked to anything but will eventually get imported to HomeComponent

function Blog(props) {
    return (
        <div className="container">
            <div className="row centered-text">
                <h1 className="blog-title col-sm-12">The Art of Assembling Art</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <img src="img/planning.jpg" className="img-fluid rounded" />
                </div>
                <div className="col">
                    <p className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</p>
                    <a href="https://www.lipsum.com/"><p>Read more...</p></a>
                </div>
            </div>
            <div className="row centered-text">
                <h1 className="blog-title col-sm-12">The Twists and Turns of Quilting</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <img src="img/freestyle.jpg" className="img-fluid rounded" />
                </div>
                <div className="col">

                    <p className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</p>
                    <a href="https://www.lipsum.com/"><p>Read more...</p></a>
                </div>
            </div>
            <div className="row centered-text">
                <h1 className="blog-title col-sm-12">What To Do With Scraps</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <img src="img/planning.jpg" className="img-fluid rounded" />
                </div>
                <div className="col">
                    <p className="blog-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est metus, bibendum vel vulputate placerat, molestie vitae tellus. Sed sodales, tortor vel hendrerit eleifend, tortor est dignissim arcu, id condimentum massa mauris vitae nisl. Vivamus tempor tincidunt eros ac varius. Sed venenatis ex dui, sit amet cursus urna pretium vel. In interdum ipsum eu mi laoreet, vel tempor nunc euismod. Proin lobortis lorem a lectus consectetur vestibulum. Nam volutpat pharetra orci. Sed efficitur a dui vitae consectetur. Ut fermentum consectetur odio, nec dictum leo. Nam ipsum ante, faucibus id sem et, semper cursus metus. Donec lorem tellus, lobortis vitae mollis eget, fermentum quis eros. Phasellus at turpis libero. Nulla aliquet eros tortor, eget tempor eros cursus quis. Proin maximus tellus sit amet neque rhoncus consequat.</p>
                    <a href="https://www.lipsum.com/"><p>Read more...</p></a>
                </div>
            </div>
        </div>
    );
}

export default Blog;