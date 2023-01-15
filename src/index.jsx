// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import weatherForecast from './store/reducers/index';
import App from './components/App/App';

const store = createStore(weatherForecast);

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
);
