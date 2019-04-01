import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import axios from '../../axios-markers';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Markers from '../Markers/Markers';
import MapContainer from '../MapContainer/MapContainer';

class MarkersContainer extends Component {

    state = {
        selectedMarker: null
    }

    componentDidMount() {
        // initiate markers from server
        this.props.onFetchMarkers();
    }

    // to dismiss error popup msg
    errorConfirmedHandler = () => {
        this.setState({ error: null });
    }

    markerSelectedHandler = () => {

    }

    render() {
        // spinner will load while getting
        // response from server
        let markers = <Spinner />;

        // assign map container when when got 
        // response from server
        if (!this.props.loading) {
            markers = <Row>
                <Markers markers={this.props.markers} />
                <MapContainer markers={this.props.markers} />
            </Row>

            // if error occurs load modal
            if (this.props.error) {
                markers = <Modal
                    show={this.props.error}
                    modalClosed={() => this.props.onfetchMarkersFail(null)}>
                    {this.props.error ? this.props.error.message : null}
                </Modal>
            }
        }

        return (
            <Container>
                {markers}
            </Container>


        );
    }
}

const mapStateToProps = state => {
    return {
        markers: state.marker.markers,
        loading: state.marker.loading,
        error: state.marker.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMarkers: () => dispatch(actions.fetchMarkers()),
        onfetchMarkersFail: (error) => dispatch(actions.fetchMarkersFail(error))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MarkersContainer, axios));