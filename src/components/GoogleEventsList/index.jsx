import { useSession } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetUserEvents from '../../helpers/GetUserEvents';
import { userEvents } from '../../store/actions/userEvents';
import Event from '../GoogleEvent';

function GoogleEventsList() {
    const session = useSession();
    const data = useSelector((state) => state.events.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            session !== null &&
            data !== null &&
            session.user.email === data.summary
        ) {
            console.log(`data up to date or user not authorized`);
            return;
        }
        if (session) {
            GetUserEvents(session.provider_token).then((res) => {
                dispatch(userEvents(res));
                console.log(`data was fetched`);
            });
        }
    }, [session]);

    return session && data !== null ? (
        <div>
            <ul>
                {data.items.map((googleEvent) => (
                    <Event key={googleEvent.id} googleEvent={googleEvent} />
                ))}
            </ul>
        </div>
    ) : null;
}

export default GoogleEventsList;
