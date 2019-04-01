import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import './custom.scss';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import markerReducer from "./store/reducers/marker";
import { watchMarker } from "./store/sagas";

// to debug redux on browser
const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({
    marker: markerReducer
});

const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
    rootReducer,
    //composeEnhancers(applyMiddleware(sagaMiddleware))
    applyMiddleware(sagaMiddleware)
);

// run sagas 
sagaMiddleware.run(watchMarker);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
