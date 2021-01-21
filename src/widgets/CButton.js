import React, { Component } from 'react';

export default class CButton extends Component {

    render() {
        const buttonType = this.props.buttonType;
        const buttonText = this.props.buttonText;
        return(
            <button 
                className="btn btn-primary"
                type={buttonType}>{buttonText}</button>
        );
    }

}