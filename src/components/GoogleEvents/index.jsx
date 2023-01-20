import { useSession } from '@supabase/auth-helpers-react';
import GetUserEvents from '../../helpers/GetUserEvents';

function GoogleEvents() {
    const session = useSession();
    if (session) {
        GetUserEvents(session.provider_token);
    }
}

export default GoogleEvents;
