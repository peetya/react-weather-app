import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactSwipe  from 'react-swipe';
import rootReducer from '../reducers/index';
import WelcomePage from "./WelcomePage/WelcomePage";
import SettingsPage from "./SettingsPage/SettingsPage";
import WeatherStatusPage from "./WeatherStatusPage/WeatherStatusPage";
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
                    <Header />
                    <ReactSwipe className="carousel" ref={(reactSwipe) => { this.reactSwipe = reactSwipe; }} swipeOptions={{continuous: false, disableScroll: true}}>
                        <WelcomePage onSwipeNext={this.onSwipeNext} />
                        <SettingsPage onSwipeNext={this.onSwipeNext} onSwipePrev={this.onSwipePrev} />
                        <WeatherStatusPage onSwipePrev={this.onSwipePrev} />
                    </ReactSwipe>
                    <Footer />
                </div>
            </Provider>
        );
    }
}
