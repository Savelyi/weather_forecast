import moment from 'moment/moment';
import PropTypes from 'prop-types';

function Event(props) {
    const gEvent = props.googleEvent;
    if (gEvent.start.dateTime === undefined)
        return (
            <li>
                {moment(gEvent.start.date).format('DD-MM dddd')}, FullDay,{' '}
                {gEvent.summary}
            </li>
        );
    return (
        <li>
            {moment(gEvent.start.dateTime).format('DD-MM dddd LT')} –{' '}
            {moment(gEvent.end.dateTime).format('LT')}, {gEvent.summary}
        </li>
    );
}

Event.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    googleEvent: PropTypes.any.isRequired,
};

export default Event;
