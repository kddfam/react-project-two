import React, { Component } from 'react';
import CInput from '../widgets/CInput';

export default class SearchBar extends Component {

    handleSubmit = value => {
        this.props.onSubmit(value);
    }

    render() {
        return(
            <div>
                <CInput inputType="text" inputPlaceHolder="City Name" onSubmit={this.handleSubmit} />
            </div>
        );
    }

}