import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherStatusList } from "../../services/owm.service";
import { saveSettings } from "../../actions/settings.action";

import './SettingsPage.scss';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherConditions: getWeatherStatusList(),
            weatherConditionCode: this.props.weatherConditionCode,
            humidity: this.props.humidity,
            temperature: this.props.temperature,
        };
    }
    onSwipeNext() {
        this.onSaveSettings();
        this.props.onSwipeNext();
    }

    onSwipePrev() {
        this.onSaveSettings();
        this.props.onSwipePrev();
    }

    onWeatherConditionChange(weatherConditionCode) {
        this.setState({
            weatherConditionCode,
        });

        this.onSaveSettings();
    }

    onTemperatureChange(e) {
        this.setState({
            temperature: e.target.value,
        });

        this.onSaveSettings();
    }

    onHumidityChange(e) {
        this.setState({
            humidity: e.target.value,
        });

        this.onSaveSettings();
    }

    onSaveSettings() {
        this.props.dispatch(saveSettings(this.state.weatherConditionCode, this.state.temperature, this.state.humidity));
    }

    render() {
        return (
            <div className="page settings">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-container shadow">
                                <div className="page-header">
                                    <h1>Settings</h1>
                                </div>
                                <div className="page-body">
                                    <form>
                                        <div className="form-group">
                                            <div className="row">
                                                {this.state.weatherConditions.map((weatherCondition) => (
                                                    <div
                                                        className={`col weather-icon ${this.state.weatherConditionCode === weatherCondition.codeStartsWith ? 'selected' : ''}`}
                                                        key={weatherCondition.codeStartsWith}
                                                        onClick={() => this.onWeatherConditionChange(weatherCondition.codeStartsWith)}
                                                    >
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="weatherCondition"
                                                                id={`weatherCondition-${weatherCondition.codeStartsWith}`}
                                                                value={weatherCondition.codeStartsWith}
                                                                onChange={() => this.onWeatherConditionChange(weatherCondition.codeStartsWith)}
                                                                checked={this.state.weatherConditionCode === weatherCondition.codeStartsWith}
                                                            />
                                                            <label className="form-check-label" htmlFor={`weatherCondition-${weatherCondition.codeStartsWith}`}>
                                                                <i className={`wi ${weatherCondition.icon}`} />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="temperature">Preferred temperature:&nbsp;</label>
                                            <strong>{this.props.temperature} °C</strong>
                                            <input type="range" className="form-control" id="temperature" min="-50" max="50" defaultValue={this.props.temperature} onChange={(e) => this.onTemperatureChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="temperature">Preferred humidity:&nbsp;</label>
                                            <strong>{this.props.humidity} %</strong>
                                            <input type="range" className="form-control" id="temperature" min="0" max="100" defaultValue={this.props.humidity} onChange={(e) => this.onHumidityChange(e)} />
                                        </div>
                                    </form>
                                </div>
                                <div className="page-footer">
                                    <p><button className="btn btn-mwm" onClick={() => this.onSwipeNext()}>Show me the weather!</button></p>
                                    <p><button className="btn btn-mwm-link" onClick={() => this.onSwipePrev()}>Back to the welcome page</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SettingsPage.propTypes = ({
    weatherConditionCode: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    onSwipeNext: PropTypes.func.isRequired,
    onSwipePrev: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
    weatherConditionCode: state.settings.weatherConditionCode,
    temperature: state.settings.temperature,
    humidity: state.settings.humidity,
});

export default connect(mapStateToProps)(SettingsPage);
