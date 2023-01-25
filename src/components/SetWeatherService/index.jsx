import { useDispatch } from 'react-redux';
import { Weather } from '../../constants/weather';
import { changeToDaily } from '../../store/actions/changeWeatherService';
import { Button } from './styled';

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
            <Button type="button" onClick={handleDailyButton}>
                Daily
            </Button>
            <Button type="button" onClick={handleForDaysButton}>
                Summary
            </Button>
        </div>
    );
}

export default SetWeatherForecast;
