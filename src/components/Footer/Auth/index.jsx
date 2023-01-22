import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function Auth() {
    const session = useSession(); // tokens
    const supabase = useSupabaseClient(); // talk to supabase

    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar',
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
                <>
                    <h2>Hey there {session.user.email}</h2>
                    <button type="button" onClick={() => signOut()}>
                        Sign Out
                    </button>
                </>
            ) : (
                <button type="button" onClick={() => googleSignIn()}>
                    Sign In With Google
                </button>
            )}
        </div>
    );
}

export default Auth;
