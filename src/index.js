import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

export const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);