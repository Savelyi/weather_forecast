import SetCityForm from '../SetCityFrom/index';
import SetWeatherForecast from '../SetWeatherService';
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
