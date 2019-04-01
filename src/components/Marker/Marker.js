import React from 'react';
import { Col, Card } from 'react-bootstrap';

const marker = (props) => (
    <Col sm={6} className="mb-5">
        <Card>
            <Card.Body>
                <Card.Title className="text-primary">{props.data.name}</Card.Title>
                <Card.Subtitle className="mb-2">{props.data.description}</Card.Subtitle>
                <Card.Text>
                    Latitude: {props.data.latitude}
                </Card.Text>
                <Card.Text>
                    Longitude: {props.data.longitude}
                </Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    </Col>
);

export default marker;