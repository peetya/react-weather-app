import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCoordinates } from "../actions/geolocation.action";
import { saveWeatherInfo } from "../actions/api.action";
import { getCurrentWeatherInfo } from "../services/owm.service";
import {
    isGeolocationSupported,
    getUserCoordinates,
} from '../services/geolocation.service';

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
        this.props.onSwipeNext();
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
                        this.props.dispatch(saveWeatherInfo(result));
                    }
                );
            },
            err => {
                this.setState({
                    isGeolocationLoading: false,
                    isGeolocationHasError: true,
                    geolocationErrorMessage: err.message,
                })
            },
        );
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at gravida ex. Proin non lectus vel purus malesuada efficitur.
                                        In egestas id sapien in iaculis. Vivamus varius mi ante, elementum bibendum odio bibendum et.
                                        Nulla auctor tellus ut bibendum tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc sed diam lorem. Suspendisse aliquam convallis nisl id luctus. Duis vitae mattis mi.
                                        Sed porttitor risus quis tellus vehicula, in vehicula felis sollicitudin.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    </p>
                                </div>
                                <div className="page-footer">
                                    {(this.state.isGeolocationLoading && <p>loading...</p>)}
                                    {(this.state.isGeolocationSupported && !this.state.isGeolocationHasError && !this.state.isGeolocationEnabled && !this.state.isGeolocationLoading && <button className="btn btn-default" onClick={() => this.onGeolocationButtonClick()}>Enable Geolocation</button>)}
                                    {(this.state.isGeolocationSupported && !this.state.isGeolocationHasError && this.state.isGeolocationEnabled && !this.state.isGeolocationLoading && <button className="btn btn-default" onClick={() => this.onSwipeNext()}>Continue</button>)}
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
};

export default connect()(WelcomePage);
