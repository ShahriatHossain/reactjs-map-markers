import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import axios from '../../../axios-markers';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../shared/utility';

class MarkerForm extends Component {
    // initiate to check component is mounted or not
    _isMounted = false;

    // initiate form
    state = {
        markerForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: this.getDefaultValue('name'),
                validation: {
                    required: true
                },
                valid: checkValidity(this.getDefaultValue('name'), {
                    required: true
                }),
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: this.getDefaultValue('description'),
                validation: {
                    required: false
                },
                valid: checkValidity(this.getDefaultValue('description'), {
                    required: false
                }),
                touched: false
            },
            latitude: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Latitude'
                },
                value: this.getDefaultValue('latitude'),
                validation: {
                    required: true,
                    isNumeric: true,
                    lat: true
                },
                valid: checkValidity(this.getDefaultValue('latitude'), {
                    required: true,
                    isNumeric: true
                }),
                touched: false
            },
            longitude: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Longitude'
                },
                value: this.getDefaultValue('longitude'),
                validation: {
                    required: true,
                    isNumeric: true,
                    long: true
                },
                valid: checkValidity(this.getDefaultValue('longitude'), {
                    required: true,
                    isNumeric: true
                }),
                touched: false
            },
        },
        formIsValid: this.checkFormIsEditMode()
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // to check form is edit mode or not
    checkFormIsEditMode() {
        let valueExist = false;

        // return false if no marker for editing
        if (!this.props.data) return valueExist;

        // checking if any of the marker properties has value or not
        const keys = Object.keys(this.props.data);
        keys.map(k => {
            if (k !== 'id') {
                valueExist = this.getDefaultValue(k) !== '';
            }
            return valueExist;
        });

        return valueExist;
    }

    // get default value from marker or empty
    getDefaultValue(key) {
        return this.props.data ? this.props.data[key] : '';
    }

    // marker save handler
    saveHandler = (event) => {
        // prevent automatica submission
        event.preventDefault();

        // initiating form value
        const formData = {};
        for (let formElementIdentifier in this.state.markerForm) {
            formData[formElementIdentifier] = this.state.markerForm[formElementIdentifier].value;
        }

        // checking has any marker id or not to decide as edit 
        const markerId = this.props.data ? this.props.data.id : '';

        this.props.onSaveMarker(formData, markerId);

    }

    // will update input fields values for each change
    inputChangedHandler = (event, inputIdentifier) => {
        // update form filed with new change
        const updatedFormElement = updateObject(this.state.markerForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.markerForm[inputIdentifier].validation),
            touched: true
        });
        // replacing form filed with new change
        const updatedmarkerForm = updateObject(this.state.markerForm, {
            [inputIdentifier]: updatedFormElement
        });
        // checking any rules break for each input fields
        let formIsValid = true;
        for (let inputIdentifier in updatedmarkerForm) {
            formIsValid = updatedmarkerForm[inputIdentifier].valid && formIsValid;
        }
        // update state
        if (this._isMounted)
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
        // generate form
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
                    Save changes
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

const mapDispatchToProps = dispatch => {
    return {
        onSaveMarker: (markerData, editId) => dispatch(actions.saveMarker(markerData, editId))
    };
};

export default connect(null, mapDispatchToProps)(withErrorHandler(MarkerForm, axios));