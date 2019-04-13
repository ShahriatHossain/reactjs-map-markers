import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Col, Card } from 'react-bootstrap';

import './MapContainer.css';
import { GOOGLE_MAP_KEY } from '../../shared/constants';

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        // initiate map markers
        const markers = this.props.markers.map((m, i) => (
            <Marker
                key={m.id}
                title={m.description}
                name={m.name}
                position={{ lat: m.latitude, lng: m.longitude }}
                onClick={this.onMarkerClick} />
        ));

        let markerDetail = null;
        if (this.state.selectedPlace) {
            const expectedProps = ['name', 'title'];
            const keys = Object.keys(this.state.selectedPlace);
            markerDetail = keys.map((k, i) => {
                if (!expectedProps.includes(k)) return '';

                return (
                    <p key={i}>
                        {k}: {this.state.selectedPlace[k]}
                    </p>
                )
            })
        }

        return (
            <Col xs={6}>
                <Map google={this.props.google}
                    className="map-extend"
                    zoom={14}>
                    {markers}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            {markerDetail}
                        </div>

                    </InfoWindow>
                </Map>
            </Col>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAP_KEY)
})(MapContainer)
