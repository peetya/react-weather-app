import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCoordinates } from "../../actions/geolocation.action";
import { saveWeatherInfo } from "../../actions/api.action";
import { saveCurrentDetails } from "../../actions/settings.action";
import { getCurrentWeatherInfo, getWeatherStatusList } from "../../services/owm.service";
import { isGeolocationSupported, getUserCoordinates } from '../../services/geolocation.service';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGeolocationLoading: false,
            isGeolocationEnabled: false,
            isGeolocationSupported: true,
            isGeolocationHasError: false,
            geolocationErrorMessage: null,
        }
    }

    componentWillMount() {
        if (!isGeolocationSupported()) {
            this.setState({
                isGeolocationSupported: false,
            })
        }
    }

    onSwipeNext() {
        if (this.state.isGeolocationSupported) {
            this.props.onSwipeNext();
        }
    }

    onGeolocationButtonClick() {
        this.setState({
            isGeolocationLoading: true,
        });

        getUserCoordinates().then(
            result => {
                this.setState({
                    isGeolocationEnabled: true,
                    isGeolocationLoading: false,
                });

                this.props.dispatch(saveCoordinates(result.coords.latitude, result.coords.longitude));

                getCurrentWeatherInfo(result.coords.latitude, result.coords.longitude).then(
                    result => {
                        const weatherConditionDetails = getWeatherStatusList().filter(wc => String(result.weather[0].id).startsWith(wc.codeStartsWith))[0];

                        this.props.dispatch(saveWeatherInfo(result));
                        this.props.dispatch(saveCurrentDetails(weatherConditionDetails.icon, weatherConditionDetails.name, weatherConditionDetails.name.toLowerCase(), weatherConditionDetails.positiveText, weatherConditionDetails.negativeText));
                    }
                );
            },
            err => {
                this.setState({
                    isGeolocationLoading: false,
                    isGeolocationHasError: true,
                    geolocationErrorMessage: err.message,
                });
            }
        )
    }

    render() {
        return (
            <div className="page welcome">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-container shadow">
                                <div className="page-header">
                                    <h1>Welcome</h1>
                                </div>
                                <div className="page-body">
                                    <p>
                                        Would you like to know if the weather suits your desire?
                                    </p>
                                    <p>
                                        Just enable your current location, let us know which weather is ideal for you, and we will inform you if it is a day for doing great things or it is better to stay at home and skip the day!
                                    </p>
                                </div>
                                <div className="page-footer">
                                    {(this.state.isGeolocationLoading && <p>Loading...</p>)}
                                    {(this.state.isGeolocationSupported && !this.state.isGeolocationHasError && !this.state.isGeolocationEnabled && !this.state.isGeolocationLoading && <button className="btn btn-mwm" onClick={() => this.onGeolocationButtonClick()}>Enable Geolocation</button>)}
                                    {(this.state.isGeolocationSupported && !this.state.isGeolocationHasError && this.state.isGeolocationEnabled && !this.state.isGeolocationLoading && <button className="btn btn-mwm" onClick={() => this.onSwipeNext()}>Continue</button>)}
                                    {(this.state.geolocationErrorMessage !== null && <p>{this.state.geolocationErrorMessage}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WelcomePage.propTypes = {
    onSwipeNext: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(WelcomePage);
