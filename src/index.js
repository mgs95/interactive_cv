import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import getStore from "./store";

const store = getStore();
const container = document.getElementById('root');

registerServiceWorker();

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    container
);
