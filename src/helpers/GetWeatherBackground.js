import { useSelector } from 'react-redux';
import {
    clearBg,
    cloudyBg,
    mistBg,
    overcastBg,
    rainyBg,
    snowBg,
    thunderstormBg,
} from '../constants/bgImages';

function GetWeatherBackground() {
    const data = useSelector((state) => state.current.data);
    if (data === null) return clearBg;
    switch (data.weather[0].main) {
        case 'Clear':
            return clearBg;
        case 'Clouds':
            if (
                data.weather[0].description === 'overcast clouds' ||
                data.weather[0].description === 'scattered clouds'
            ) {
                return overcastBg;
            }
            return cloudyBg;
        case 'Rain':
        case 'Drizzle':
            return rainyBg;
        case 'Thunderstorm':
            return thunderstormBg;
        case 'Snow':
            return snowBg;
        default:
            return mistBg;
    }
}

export default GetWeatherBackground;
