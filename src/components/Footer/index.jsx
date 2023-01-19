import SetCityForm from '../../forms/index';
import SetWeatherForecast from '../SetWeatherForecast';
import Auth from '../Auth';

function Footer() {
    return (
        <div>
            <SetCityForm />
            <Auth />
            <SetWeatherForecast />
        </div>
    );
}

export default Footer;
