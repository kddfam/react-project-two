import React, { Component } from 'react';

export default class WeatherCard extends Component {

    render() {
        const weatherData = this.props.weatherData;
        return <h1>{Math.round(weatherData.main.temp - 273.15)}</h1>
    }
}