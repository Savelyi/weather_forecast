import PropTypes from 'prop-types';
import { apiCalendar } from '../../helpers/apiCalendar/apiCalendarConfig';

function GoogleEvents({ isSignedIn }) {
    const handleClick = () => {
        const now = new Date();
        apiCalendar
            .listEvents({
                timeMax: new Date(now.setDate(now.getDate() + 3)).toISOString(),
                timeMin: new Date().toISOString(),
            })
            .then((result) => {
                console.log(result.result.items);
            });
    };

    if (isSignedIn)
        return (
            <button type="submit" onClick={handleClick}>
                Get Events
            </button>
        );
    return <h1>User was not Signed In</h1>;
}

GoogleEvents.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
};

export default GoogleEvents;
