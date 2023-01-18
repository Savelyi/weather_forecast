import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import weatherForecast from './reducers/index';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, weatherForecast);

// export default () => {
//     const store = createStore(persistedReducer);
//     const persistor = persistStore(store)
//     return { store, persistor };
// };
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
