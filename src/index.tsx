import React from 'react';
import 'antd/dist/antd.min.css';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './vendor';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';
import DefaultTheme from './themes/default';
import store from './redux/store';
import "./assets/styles/index.scss"
import "./assets/styles/core.scss"

ReactDOM.render(
  <ThemeProvider theme={DefaultTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
