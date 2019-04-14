import React, { Component } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

import axios from '../../../axios-markers';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import BoostrapModal from '../../../components/UI/BoostrapModal/BootstrapModal';
import MarkerForm from '../MarkerForm/MarkerForm';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';

export class Marker extends Component {
    // initiate to check component is mounted or not
    _isMounted = false;

    // initiate state
    state = {
        show: false,
        marker: {},
        showConfirmDelete: false
    }

    componentDidMount() {
        this._isMounted = true;
    }

    // show delete confirm dialog
    handleDelete = (marker) => {
        if (this._isMounted)
            this.setState({ showConfirmDelete: true, marker });
    }

    // show edit form dialog
    handleEdit = (marker) => {
        if (this._isMounted)
            this.setState({ show: true, marker });
    }

    // close all dialogs
    handleClose = () => {
        if (this._isMounted)
            this.setState({ show: false, showConfirmDelete: false });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        // initiate marker form and delete form
        const markerForm = <MarkerForm data={this.state.marker} />
        const deleteConfirmForm = <DeleteConfirmation data={this.state.marker} />

        return (
            <Col sm={6} className="mb-5">
                <Card>
                    <Card.Body>
                        <Card.Title className="text-primary">{this.props.data.name}</Card.Title>
                        <Card.Subtitle className="mb-2">{this.props.data.description}</Card.Subtitle>
                        <Card.Text>
                            Latitude: {this.props.data.latitude}
                        </Card.Text>
                        <Card.Text>
                            Longitude: {this.props.data.longitude}
                        </Card.Text>
                        <Button variant="light" onClick={() => this.handleEdit(this.props.data)}>Edit</Button>
                        <Button variant="light" onClick={() => this.handleDelete(this.props.data)}>Delete</Button>
                    </Card.Body>
                </Card>

                <BoostrapModal
                    title="Edit Map"
                    body={markerForm}
                    closed={this.handleClose}
                    show={this.state.show}
                />

                <BoostrapModal
                    title="Delete Marker"
                    body={deleteConfirmForm}
                    closed={this.handleClose}
                    show={this.state.showConfirmDelete}
                />
            </Col>
        );
    }
}

export default withErrorHandler(Marker, axios);