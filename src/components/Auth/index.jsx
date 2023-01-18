import { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { config } from '../../helpers/apiCalendar/apiCalendarConfig';

function Auth() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const apiCalendar = new ApiCalendar(config);

    const handleSignInClick = () => {
        apiCalendar.handleAuthClick();
        setIsSignedIn(true);
    };

    const handleSignOutClick = () => {
        apiCalendar.handleSignoutClick();
        setIsSignedIn(false);
    };

    if (isSignedIn)
        return (
            <button type="submit" onClick={handleSignOutClick}>
                Sign Out
            </button>
        );
    return (
        <button type="submit" onClick={handleSignInClick}>
            Sign In
        </button>
    );
}

export default Auth;
