// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import App from './components/App/App';
import { persistor, store } from './store/configureStore';

const root = createRoot(document.getElementById('root'));

const supabase = createClient(
    'https://riezlmmopjzhymmmizmy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZXpsbW1vcGp6aHltbW1pem15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMDg3MTYsImV4cCI6MTk4OTc4NDcxNn0.Af1kTo-SQ91u3Rq1Pd0iiu1YqPY91BpNDDbbBVfxq7E'
);

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
