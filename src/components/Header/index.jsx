import SetCityForm from '../SetCityForm/index';
import SetWeatherForecast from '../SetWeatherService';
import Auth from '../Auth';
import { HeaderWrapper } from './styled';

function Header() {
    return (
        <HeaderWrapper>
            <Auth />
            <SetWeatherForecast />
            <SetCityForm />
        </HeaderWrapper>
    );
}

export default Header;
