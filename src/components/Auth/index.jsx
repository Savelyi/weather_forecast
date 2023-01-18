import { useDispatch, useSelector } from 'react-redux';
import { apiCalendar } from '../../helpers/apiCalendar/apiCalendarConfig';
import { signIn, signOut } from '../../store/actions/auth';

function Auth() {
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    const dispatch = useDispatch();

    const handleSignInClick = () => {
        apiCalendar.handleAuthClick();
        dispatch(signIn);
    };

    const handleSignOutClick = () => {
        apiCalendar.handleSignoutClick();
        dispatch(signOut);
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
