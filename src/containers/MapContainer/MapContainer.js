import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Col } from 'react-bootstrap';

import './MapContainer.css';

class MapContainer extends Component {

    render() {
        const markers = this.props.markers.map((m, i) => (
            <Marker
                key={i}
                title={m.name}
                name={m.name}
                position={{ lat: m.latitude, lng: m.longitude }} />
        ));


        return (
            <Col xs={6}>
                <Map google={this.props.google}
                    className="map-extend"
                    zoom={14}>
                    {markers}
                </Map>
            </Col>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('MAP_KEY')
})(MapContainer)
