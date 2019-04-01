import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import axios from '../../../axios-markers';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

class MarkerForm extends Component {
    state = {
        markerForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            latitude: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Latitude'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            longitude: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Longitude'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    saveHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.markerForm) {
            formData[formElementIdentifier] = this.state.markerForm[formElementIdentifier].value;
        }

        this.props.onSaveMarker(formData);

    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(this.state.markerForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.markerForm[inputIdentifier].validation),
            touched: true
        });
        const updatedmarkerForm = updateObject(this.state.markerForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedmarkerForm) {
            formIsValid = updatedmarkerForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ markerForm: updatedmarkerForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.markerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.markerForm[key]
            });
        }
        let form = (
            <Form onSubmit={this.saveHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button variant="primary" type="submit" disabled={!this.state.formIsValid}>
                    Submit
                </Button>
            </Form>
        );

        return (
            <div>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.marker.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveMarker: (markerData) => dispatch(actions.saveMarker(markerData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MarkerForm, axios));