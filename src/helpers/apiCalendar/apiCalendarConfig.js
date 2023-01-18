import ApiCalendar from 'react-google-calendar-api';

const config = {
    clientId:
        '383208859014-b4morc3jtajlqufjmspe8g25accirqi0.apps.googleusercontent.com',
    apiKey: 'AIzaSyB4TOWprcBJsbvFYumbhm64srxx5iGMiIk',
    scope: 'https://www.googleapis.com/auth/calendar',
    discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
};

export const apiCalendar = new ApiCalendar(config);
