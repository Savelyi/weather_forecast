import { useSelector } from 'react-redux';
import { Weather } from '../../constants/weather';
import DailyWeather from '../DailyWeather/index';
import GeneralWeather from '../GeneralWeather';

function BaseWeather() {
    const service = useSelector((state) => state.service);
    switch (service.name) {
        case Weather.DAILY:
            return <DailyWeather />;
        case Weather.GENERAL:
            return <GeneralWeather />;
        default:
    }
}

export default BaseWeather;
