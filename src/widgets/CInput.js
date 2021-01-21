import React, { Component } from 'react';
import CButton from './CButton';

export default class CInput extends Component {

    state = {
        keyword: ''
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        this.setState({keyword: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }

    render() {
        const inputType = this.props.inputType;
        const inputPlaceHolder = this.props.inputPlaceHolder;
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                        <input
                            type={inputType}
                            placeholder={inputPlaceHolder}
                            value={this.state.keyword}
                            onChange={this.handleChange}
                            className="form-control"
                            style={{width: '600px', marginRight: '10px'}}
                        />
                        <CButton buttonType="submit" buttonText="Search" />
                    </div>
                </form>
            </div>
        );
    }

}