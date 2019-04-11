import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from '../../../axios-markers';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';

class DeleteConfirmation extends Component {
    // initiate to check component is mounted or not
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
    }
    // delete marker from server
    handleDelete = () => {
        if (this._isMounted)
            this.props.onDeleteMarker(this.props.data.id);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        // initiate delete form
        const deleteButton = (
            <Form>
                <Button variant="primary" type="button" onClick={this.handleDelete}>
                    Delete?
                </Button>
            </Form>
        );

        return (
            <div>
                {deleteButton}
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteMarker: (markerId) => dispatch(actions.deleteMarker(markerId))
    };
};

export default connect(null, mapDispatchToProps)(withErrorHandler(DeleteConfirmation, axios));