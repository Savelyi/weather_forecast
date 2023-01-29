import axios from 'axios';
import { apiUrls } from '../constants/apiUrls';

function GetUserEvents(token) {
    const now = new Date();
    return axios
        .get(apiUrls.googleApiGetEvents, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                timeMin: now.toISOString(),
                timeMax: new Date(now.setDate(now.getDate() + 3)).toISOString(),
                maxResults: 3,
                singleEvents: 'true',
                orderBy: 'startTime',
            },
        })
        .then((res) => res.data);
}

export default GetUserEvents;
