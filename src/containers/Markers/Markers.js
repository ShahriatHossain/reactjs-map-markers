import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Marker from './Marker/Marker';
import BoostrapModal from '../../components/UI/BoostrapModal/BootstrapModal';
import MarkerForm from './MarkerForm/MarkerForm';
import axios from '../../axios-markers';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner';

export class Markers extends Component {
    // initiate to check component is mounted or not
    _isMounted = false;

    // initiate state
    state = {
        show: false
    }

    componentDidMount() {
        this._isMounted = true;
    }

    // close modal
    handleClose = () => {
        if (this._isMounted)
            this.setState({ show: false });
    }

    // show modal
    handleShow = () => {
        if (this._isMounted)
            this.setState({ show: true });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        // assign markers
        const markers = this.props.markers.map((m, i) => (
            <Marker
                key={i}
                data={m}
            />
        ));

        // spinner will load while saving marker
        let spinner = this.props.loading ? <Spinner /> : null;

        // marker create or edit form
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