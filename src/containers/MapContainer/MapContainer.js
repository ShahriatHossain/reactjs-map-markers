import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Col } from 'react-bootstrap';

import './MapContainer.css';
import { GOOGLE_MAP_KEY } from '../../shared/constants';

class MapContainer extends Component {

    render() {
        // initiate map markers
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
<<<<<<< HEAD
    apiKey: (GOOGLE_MAP_KEY)
})(MapContainer)
=======
    apiKey: ('MAP_KEY')
})(MapContainer)
>>>>>>> c9d32e6c69289bd82982e74b82d28da95a8a463a
