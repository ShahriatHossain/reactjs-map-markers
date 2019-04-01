import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Markers.css';
import Marker from '../../components/Marker/Marker';
import BoostrapModal from '../../components/UI/BoostrapModal/BootstrapModal';
import MarkerForm from './MarkerForm/MarkerForm';
import axios from '../../axios-markers';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner';

class Markers extends Component {
    state = {
        show: false
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        const markers = this.props.markers.map((m, i) => (
            <Marker
                key={i}
                data={m}
            />
        ));

        // spinner will load while saving marker
        let spinner = this.props.loading ? <Spinner /> : null;

        const markerForm = <MarkerForm />

        return (
            <Col xs={6}>
                <Button variant="primary" className="mb-5" onClick={this.handleShow}>
                    Add Map
                </Button>
                {spinner}
                <BoostrapModal
                    title="Add Map"
                    body={markerForm}
                    closed={this.handleClose}
                    show={this.state.show}
                />
                <Row>
                    {markers}
                </Row>
            </Col>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.marker.loading
    }
};

export default connect(mapStateToProps)(withErrorHandler(Markers, axios));