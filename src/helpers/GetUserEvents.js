import axios from 'axios';
import { googleApiGetEventsUrl } from '../constants/apiUrls';

function GetUserEvents(token) {
    const now = new Date();
    return axios
        .get(
            googleApiGetEventsUrl,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    timeMin: now.toISOString(),
                    timeMax: new Date(
                        now.setDate(now.getDate() + 3)
                    ).toISOString(),
                    singleEvents: 'true',
                    orderBy: 'startTime',
                },
            }
        )
        .then((res) => res.data);
}

export default GetUserEvents;
