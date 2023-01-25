import moment from 'moment/moment';
import PropTypes from 'prop-types';

function Event(props) {
    const gEvent = props.googleEvent;
    if (gEvent.start.dateTime === undefined)
        return (
            <li>
                Time: {moment(gEvent.start.date).format('dddd')}, FullDay, name:{' '}
                {gEvent.summary}
            </li>
        );
    return (
        <li>
            Time: {moment(gEvent.start.dateTime).format('dddd LT')} –{' '}
            {moment(gEvent.end.dateTime).format('LT')}, name: {gEvent.summary}
        </li>
    );
}

Event.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    googleEvent: PropTypes.any.isRequired,
};

export default Event;
