import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import weatherForecast from './reducers/index';

const expireReducer = require('redux-persist-expire');

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        expireReducer('current', {
            expireSeconds: 600,
            expiredState: {
                data: null,
            },
            autoExpire: true,
        }),
        expireReducer('forecast', {
            expireSeconds: 1800,
            expiredState: {
                data: null,
            },
            autoExpire: true,
        }),
        expireReducer('city', {
            expireSeconds: 86400,
            expiredState: {
                name: null,
            },
            autoExpire: true,
        }),
        expireReducer('events', {
            expireSeconds: 600,
            expiredState: {
                data: null,
            },
            autoExpire: true,
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, weatherForecast);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
