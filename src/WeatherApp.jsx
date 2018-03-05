import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactSwipe  from 'react-swipe';
import rootReducer from './reducers';
import WelcomePage from "./components/WelcomePage";
import SettingsPage from "./components/SettingsPage";
import WeatherStatusPage from "./components/WeatherStatusPage";

const store = createStore(rootReducer);

export default class WeatherApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                    <WelcomePage />
                    <SettingsPage />
                    <WeatherStatusPage />
                </ReactSwipe>
            </Provider>
        );
    }
}
