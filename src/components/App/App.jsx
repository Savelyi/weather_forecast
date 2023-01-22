// import { useEffect } from 'react';
import BaseWeather from '../Weather/index';
import Footer from '../Footer/index';
import GoogleEventsList from '../GoogleEventsList/index';

function App() {
    return (
        <div>
            <Footer />
            <BaseWeather />
            <GoogleEventsList />
        </div>
    );
}

export default App;
