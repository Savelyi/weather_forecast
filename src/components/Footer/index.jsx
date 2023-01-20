import SetCityForm from '../../forms/index';
import SetWeatherForecast from '../SetWeatherForecast';
import Auth from '../Auth';

function Footer() {
    return (
        <div>
            <Auth />
            <SetCityForm />
            <SetWeatherForecast />
        </div>
    );
}

export default Footer;
