import axios from 'axios';

function GetUserEvents(token) {
    const now = new Date();
    axios
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
                    orderBy: 'updated',
                },
            }
        )
        .then((res) => console.log(res));
}

export default GetUserEvents;
