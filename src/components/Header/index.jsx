import SetCityForm from '../SetCityFrom/index';
import SetWeatherForecast from '../SetWeatherService';
import Auth from '../Auth';
import { HeaderWrapper } from './styled';

function Header() {
    return (
        <HeaderWrapper>
            <Auth />
            <SetCityForm />
            <SetWeatherForecast />
        </HeaderWrapper>
    );
}

export default Header;
