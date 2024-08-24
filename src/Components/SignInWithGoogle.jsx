import React from 'react';
import googleImage from '../assets/google.png';

function SignInWithGoogle({ handleGoogleSignIn }) {
    return (

        <div
            className="flex justify-center cursor-pointer"
            onClick={handleGoogleSignIn}
        >
            <img src={googleImage} className="w-3/5" alt="Sign in with Google" />
        </div>


    );
}

export default SignInWithGoogle;

