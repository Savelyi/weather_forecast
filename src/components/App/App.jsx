import { useSelector } from 'react-redux';
import BaseWeather from '../BaseWeather/index';
import Footer from '../Footer/index';
import GoogleEvents from '../GoogleEvents';

function App() {
    const isSignedIn = useSelector((state) => state.user.isSignedIn);

    return (
        <div>
            <Footer />
            <BaseWeather />
            <GoogleEvents isSignedIn={isSignedIn} />
        </div>
    );
}

export default App;
