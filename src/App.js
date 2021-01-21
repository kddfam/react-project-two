import React, { Component } from 'react';
import BackendConfig from './api/BackendConfig';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

export default class App extends Component {

    state = {
        showWeatherCard: false,
        weatherData: {}
    }

    componentDidMount() {
        BackendConfig.get(`?q=panipat&appid=YOUR_API_KEY_FROM_OPENWEATHERMAP`)
        .then(res => { this.setState({weatherData: res.data, showWeatherCard: true}); } )
        .catch(err => { console.log(err) } );
    }

    handleSubmit = async keyword => {
        const response = await BackendConfig.get(`?q=${keyword}&appid=YOUR_API_KEY_FROM_OPENWEATHERMAP`);
        this.setState({weatherData: response.data});
    }

    render() {
        return(
            <div className="container" style={{padding: '10px'}}>
                <SearchBar onSubmit={this.handleSubmit} />
                {this.state.showWeatherCard ? <WeatherCard weatherData={this.state.weatherData} /> : null}
            </div>
        );
    }
}