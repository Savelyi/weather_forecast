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
                Today
            </Button>
            <Button type="button" onClick={handleForDaysButton}>
                5 Days
            </Button>
        </div>
    );
}

export default SetWeatherForecast;
