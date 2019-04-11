import React, { Component, Fragment } from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const modalClasses = this.props.show ? ['Modal', 'Show'].join(' ')
            : ['Modal', 'Hide'].join(' ');

        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={modalClasses}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;