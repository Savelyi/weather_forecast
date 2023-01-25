import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import App from './components/App/App';
import { persistor, store } from './store/configureStore';
import { supabase } from './supabaseConfig';
import GlobalStyles from './styles/global';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <React.StrictMode>
            <SessionContextProvider supabaseClient={supabase}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <GlobalStyles />
                        <App />
                    </PersistGate>
                </Provider>
            </SessionContextProvider>
        </React.StrictMode>
    </div>
);
