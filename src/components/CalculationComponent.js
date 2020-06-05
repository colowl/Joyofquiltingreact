import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class Calculation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <div class="container">
                    <div class="row">
                        {/*"Quilting" option*/}
                        <div class="col col-xs-12 col-md-4">
                            <div class="form-group form-check">
                                <h4>Quilting</h4>
                                <input type="radio" id="quiltsimple" name="quilting" value=".25" />
                                <label for="quilting">Simple</label>
                                <input type="radio" id="quiltcomplex" name="quilting" value=".5" />
                                <label for="quilting">Complex</label>
                            </div>
                        </div>
                        {/*"Piecing" option*/}
                        <div class="col col-xs-12 col-md-4">
                            <div class="form-group form-check">
                                <h4>Piecing</h4>
                                <input type="radio" id="piecesimple" name="piecing" value=".25" />
                                <label for="piecing">Simple</label>
                                <input type="radio" id="piececomplex" name="piecing" value=".5" />
                                <label for="piecing">Complex</label>
                            </div>
                        </div>
                        {/*"Painting" option*/}
                        <div class="col col-xs-12 col-md-4">
                            <div class="form-group form-check">
                                <h4>Painting</h4>
                                <input type="radio" id="paintsimple" name="painting" value=".2" />
                                <label for="painting">Simple</label>
                                <input type="radio" id="paintcomplex" name="painting" value=".4" />
                                <label for="painting">Complex</label>
                            </div>
                        </div>
                    </div>
                    {/*The commission request button*/}
                    <div class="row centered-text">
                        <button type="button" id="requestButton" class="center btn btn-info">Request</button>
                    </div>
                </div>
            </LocalForm>
        )
    }

}


export default Calculation;