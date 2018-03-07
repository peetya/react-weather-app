import React from 'react';
import { connect } from 'react-redux';

class WeatherStatusPage extends React.Component {
    onSwipePrev() {
        this.props.onSwipePrev();
    }

    render() {
        return (
            <div className="page status">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-container shadow">
                                <div className="page-header">
                                    <h1>The current weather in</h1>
                                    <h2>{this.props.apiResponse.name}</h2>
                                </div>
                                <div className="page-body">
                                    {(this.props.apiResponse.main && <p>{this.props.apiResponse.main.temp} Celsius</p>)}
                                </div>
                                <div className="page-footer">
                                    <p><button className="btn btn-link" onClick={() => this.onSwipePrev()}>Back to my settings</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    apiResponse: state.api.apiResponse,
});

export default connect(mapStateToProps)(WeatherStatusPage);
