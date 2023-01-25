import BaseWeather from '../Weather/index';
import Header from '../Header/index';
import GoogleEventsList from '../GoogleEventsList/index';
import { BaseAppFrame } from './styled';

function App() {
    return (
        <BaseAppFrame>
            <Header />
            <BaseWeather />
            <GoogleEventsList />
        </BaseAppFrame>
    );
}

export default App;
