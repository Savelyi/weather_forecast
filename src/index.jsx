// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import {persistor, store} from './store/configureStore';

const root = createRoot(document.getElementById('root'));


root.render(
    <div>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </div>
);
