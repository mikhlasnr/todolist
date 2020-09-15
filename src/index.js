import React from 'react';
import {render} from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
