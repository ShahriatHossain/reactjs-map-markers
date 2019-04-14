import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            // initiate to check component is mounted or not
            this._isMounted = false;

            this.state = {
                error: null
            };

            // add req an resp interceptor to fire globally 
            this.reqInterceptor = axios.interceptors.request.use(req => {
                if (this._isMounted)
                    this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                if (this._isMounted)
                    this.setState({ error: error });
            });
        }

        componentDidMount() {
            this._isMounted = true;
        }

        componentWillUnmount() {
            this._isMounted = false;

            // remove interceptor on component unmount
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        // initiat error null when modal dismissed
        errorConfirmedHandler = () => {
            if (this._isMounted)
                this.setState({ error: null });
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;