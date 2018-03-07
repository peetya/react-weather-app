import React from 'react';
import { connect } from 'react-redux';
import { getWeatherConditionList } from "../services/owm.service";

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: 0,
            weatherConditions: getWeatherConditionList(),
        };
    }
    onSwipeNext() {
        this.props.onSwipeNext();
    }

    onSwipePrev() {
        this.props.onSwipePrev();
    }

    onTemperatureChange(e) {
        this.setState({
            temperature: e.target.value,
        })
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
                                            <label htmlFor="weatherCondition">Preferred weather condition:</label>
                                            <select className="form-control" id="weatherCondition">
                                                {this.state.weatherConditions.map((weatherCondition) => (
                                                    <option key={weatherCondition.codeStartsWith} value={weatherCondition.codeStartsWith}>{weatherCondition.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="temperature">Preferred temperature:</label>
                                            <strong>{this.state.temperature} Celsius</strong>
                                            <input type="range" className="form-control" id="temperature" min="-50" max="50" value={this.state.temperature} onChange={(e) => this.onTemperatureChange(e)} />
                                        </div>
                                    </form>
                                </div>
                                <div className="page-footer">
                                    <p><button className="btn btn-default" onClick={() => this.onSwipeNext()}>Show me the weather!</button></p>
                                    <p><button className="btn btn-link" onClick={() => this.onSwipePrev()}>Back to the welcome page</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(SettingsPage);
