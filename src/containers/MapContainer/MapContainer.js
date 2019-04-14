import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Col } from 'react-bootstrap';
import { startCase, toLower } from 'lodash';

import './MapContainer.css';
import { GOOGLE_MAP_KEY } from '../../shared/constants';

export class MapContainer extends Component {
    // initiates state
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    // clicking on marker to show pop up
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

        // process marker details for map pop up
        let markerDetail = null;
        if (this.state.selectedPlace) {
            const expectedProps = ['name', 'title', 'position'];
            const keys = Object.keys(this.state.selectedPlace);
            markerDetail = keys.map((k, i) => {
                if (!expectedProps.includes(k)) return '';

                // process for position lat, long and other fields
                let fields = [];
                if (k === 'position') {
                    const position = Object.keys(this.state.selectedPlace[k]).map((pos, j) => (
                        <p key={i + j}>
                            {startCase(toLower(pos))}: {this.state.selectedPlace[k][pos]}
                        </p>
                    ));
                    fields.push(position);
                }
                else {
                    const otherField = <p key={i}>
                        {startCase(toLower(k))}: {this.state.selectedPlace[k]}
                    </p>
                    fields.push(otherField);
                }

                return (
                    <div>
                        {fields}
                    </div>
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
