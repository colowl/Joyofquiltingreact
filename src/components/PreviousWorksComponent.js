import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardImg, CardBody, CardSubtitle, CardColumns } from 'reactstrap';
import React, { Component } from 'react';

class PreviousWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <h2>Previous Works</h2>
                <CardColumns>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/planning.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">A Fall Collection</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/cat.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">Painting on Quilts</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/freestyle.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">Loop-dy Loops</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/squares2.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">Mini Squares</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/thinbluequilt.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">Table Runner</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/squares.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">Running Out Of Loaded Images...</p></CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src={require('../shared/images/thinbluequilt2.jpg')} alt="preparing to cut quilt fabric" />
                            <CardSubtitle><p className="works-text">The Art of Quilting Art</p></CardSubtitle>
                        </CardBody>
                    </Card>
                </CardColumns>
            </React.Fragment >
        );
    }
}

export default PreviousWorks;