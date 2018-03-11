import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';

import './WeatherStatusPage.scss';

class WeatherStatusPage extends React.Component {
    onSwipePrev() {
        this.props.onSwipePrev();
    }

    isMoodHappy() {
        return (
            String(this.props.actualWeatherConditionCode).startsWith(this.props.expectedWeatherConditionCode) &&
            Math.abs(this.props.actualTemperature - this.props.expectedTemperature) < config.temperature_tolerance &&
            Math.abs(this.props.actualHumidity - this.props.expectedHumidity) < config.humidity_tolerance
        );
    }

    render() {
        return (
            <div className="page status">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-container shadow">
                                <div className="page-header">
                                    <h1>The current weather</h1>
                                </div>
                                <div className={"page-body " + this.props.className}>
                                    <div className="weather-status-wrapper">
                                        <div className="positive-text"><span>{this.isMoodHappy() && this.props.positiveText}</span></div>
                                        <div className="negative-text"><span>{!this.isMoodHappy() && this.props.negativeText}</span></div>
                                        <div className="icon"><i className={'wi ' + this.props.icon} /></div>
                                        <div className="name"><span>{this.props.name}</span></div>
                                        <div className="temperature"><span>{this.props.actualTemperature} °C</span></div>
                                        <div className="humidity"><span>{this.props.actualHumidity} %</span></div>
                                        <div className="city"><span>{this.props.actualCityName}</span></div>
                                    </div>
                                </div>
                                <div className="page-footer">
                                    <p><button className="btn btn-mwm-link" onClick={() => this.onSwipePrev()}>Back to my settings</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WeatherStatusPage.propTypes = ({
    expectedWeatherConditionCode: PropTypes.number.isRequired,
    expectedTemperature: PropTypes.number.isRequired,
    expectedHumidity: PropTypes.number.isRequired,
    actualHumidity: PropTypes.number,
    actualTemperature: PropTypes.number,
    actualWeatherConditionCode: PropTypes.number,
    actualCityName: PropTypes.string,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    positiveText: PropTypes.string.isRequired,
    negativeText: PropTypes.string.isRequired,
    onSwipePrev: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
    expectedWeatherConditionCode: state.settings.weatherConditionCode,
    expectedTemperature: state.settings.temperature,
    expectedHumidity: state.settings.humidity,
    actualHumidity: state.api.humidity,
    actualTemperature: state.api.temperature,
    actualWeatherConditionCode: state.api.weatherConditionCode,
    actualCityName: state.api.cityName,
    icon: state.settings.icon,
    name: state.settings.name,
    className: state.settings.className,
    positiveText: state.settings.positiveText,
    negativeText: state.settings.negativeText,
});

export default connect(mapStateToProps)(WeatherStatusPage);
