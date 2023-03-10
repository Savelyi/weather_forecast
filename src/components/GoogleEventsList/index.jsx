import { useSession } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetUserEvents from '../../utils/GetUserEvents';
import { userEvents } from '../../store/actions/userEvents';
import Event from '../GoogleEvent';
import { Wrapper } from './styled';

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
            return;
        }
        if (session) {
            GetUserEvents(session.provider_token).then((res) => {
                dispatch(userEvents(res));
            });
        }
    }, [session]);

    return session && data !== null ? (
        <Wrapper>
            <ul>
                {data.items.map((googleEvent) => (
                    <Event key={googleEvent.id} googleEvent={googleEvent} />
                ))}
            </ul>
        </Wrapper>
    ) : null;
}

export default GoogleEventsList;
