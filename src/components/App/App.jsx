// import { useEffect } from 'react';
import BaseWeather from '../Weather/index';
import Footer from '../Footer/index';
import GoogleEventsList from '../GoogleEventsList/index';

function App() {
    // useEffect(() => {
    //     const persistStr = localStorage.getItem('persist:root');
    //     if (persistStr) {
    //         const now = new Date();
    //         console.log()
    //         const persist = JSON.parse(persistStr);
    //         if (now.getMinutes() >= persist.expiry) {
    //             localStorage.removeItem('persist:root');
    //             console.log('storage was deleted');
    //         }
    //     }
    // }, []);

    return (
        <div>
            <Footer />
            <BaseWeather />
            <GoogleEventsList />
        </div>
    );
}

export default App;
