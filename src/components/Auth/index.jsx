import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { googleApiAuthScope } from '../../constants/apiUrls';
import { AuthButton } from './styled';

function Auth() {
    const session = useSession(); // tokens
    const supabase = useSupabaseClient(); // talk to supabase

    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: googleApiAuthScope,
            },
        });
        if (error) {
            alert('Error logging in to Google provider with Supabase');
            console.log(error);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    return (
        <div>
            {session ? (
                <AuthButton data-title="Sign Out" onClick={() => signOut()}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                        alt=""
                    />
                </AuthButton>
            ) : (
                <AuthButton data-title="Sign In" onClick={() => googleSignIn()}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                        alt=""
                    />
                </AuthButton>
            )}
        </div>
    );
}

export default Auth;
