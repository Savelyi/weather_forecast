import { useDispatch } from 'react-redux';
import { Weather } from '../../../constants/weather';
import { changeToDaily } from '../../../store/actions/changeWeatherService';

function SetWeatherForecast() {
    const dispatch = useDispatch();

    const handleDailyButton = () => {
        dispatch(changeToDaily(Weather.CURRENT));
    };

    const handleForDaysButton = () => {
        dispatch(changeToDaily(Weather.FORECAST));
    };

    return (
        <div>
            <button type="button" onClick={handleDailyButton}>
                Daily
            </button>
            <button type="button" onClick={handleForDaysButton}>
                For 5 days
            </button>
        </div>
    );
}

export default SetWeatherForecast;
