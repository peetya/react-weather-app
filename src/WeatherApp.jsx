import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactSwipe  from 'react-swipe';
import rootReducer from './reducers';

// components
import WelcomePage from "./components/WelcomePage";
import SettingsPage from "./components/SettingsPage";
import WeatherStatusPage from "./components/WeatherStatusPage";

// styles
import './WeatherApp.scss';

const store = createStore(rootReducer);

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);

        this.onSwipeNext = this.onSwipeNext.bind(this);
        this.onSwipePrev = this.onSwipePrev.bind(this);
    }
    onSwipeNext() {
        this.reactSwipe.next();
    }

    onSwipePrev() {
        this.reactSwipe.prev();
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1 className="app-title">My Weather Mood</h1>
                    <ReactSwipe className="carousel" ref={(reactSwipe) => { this.reactSwipe = reactSwipe; }} swipeOptions={{continuous: false}}>
                        <WelcomePage onSwipeNext={this.onSwipeNext} />
                        <SettingsPage onSwipeNext={this.onSwipeNext} onSwipePrev={this.onSwipePrev} />
                        <WeatherStatusPage onSwipePrev={this.onSwipePrev} />
                    </ReactSwipe>
                </div>
            </Provider>
        );
    }
}
