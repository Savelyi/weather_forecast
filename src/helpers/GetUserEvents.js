import axios from 'axios';

function GetUserEvents(token) {
    const now = new Date();
    return axios
        .get(
            'https://www.googleapis.com/calendar/v3/calendars/primary/events',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    timeMin: new Date().toISOString(),
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
