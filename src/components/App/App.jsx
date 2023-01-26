import BaseWeather from '../Weather/index';
import Header from '../Header/index';
import GoogleEventsList from '../GoogleEventsList/index';
import { BaseAppFrame } from './styled';
import GetWeatherBackground from '../../helpers/GetWeatherBackground';

function App() {
    return (
        <BaseAppFrame bg={GetWeatherBackground()}>
            <Header />
            <BaseWeather />
            <GoogleEventsList />
        </BaseAppFrame>
    );
}

export default App;
