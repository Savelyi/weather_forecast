import { useDispatch } from 'react-redux';
import { weather } from '../../constants/weather';
import { changeService } from '../../store/actions/weatherData';
import { Button } from './styled';

function SetWeatherForecast() {
    const dispatch = useDispatch();

    const handleDailyButton = () => {
        dispatch(changeService(weather.CURRENT));
    };

    const handleForDaysButton = () => {
        dispatch(changeService(weather.FORECAST));
    };

    return (
        <div>
            <Button type="button" onClick={handleDailyButton}>
                Today
            </Button>
            <Button type="button" onClick={handleForDaysButton}>
                5 Days
            </Button>
        </div>
    );
}

export default SetWeatherForecast;
