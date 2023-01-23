// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import App from './components/App/App';
import { persistor, store } from './store/configureStore';
import { supabase } from './supabaseConfig';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <SessionContextProvider supabaseClient={supabase}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </SessionContextProvider>
    </div>
);
