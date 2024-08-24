import { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';
import SignInWithGoogle from './SignInWithGoogle';

const provider = new GoogleAuthProvider();

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for password visibility
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully");
            navigate('/welcome');
        } catch (error) {
            console.error('Firebase Error:', error);
            let errorMessage;
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password.';
                    break;
                default:
                    errorMessage = 'An error occurred: ' + error.message;
                    break;
            }
            toast.error(errorMessage);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            toast.success("Logged in with Google successfully");
            navigate('/welcome');
        } catch (error) {
            console.error('Firebase Error:', error);
            toast.error('Failed to sign in with Google: ' + error.message);
        }
    };

    return (
        <div className='h-[100vh] flex flex-col items-center bg-background bg-cover justify-center text-white'>
            <div className='h-[450px] w-80 bg-blue-600/20 border border-blue-600/20 backdrop-blur-lg rounded-lg px-6 my-4 pt-12 overflow-hidden'>
                <h2 className='text-3xl font-bold pb-6 text-center'>Login</h2>
                <form className='flex flex-col items-center' onSubmit={handleLogin}>
                    <div className='w-full relative'>
                        <input
                            name="email"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            value={email}
                        />
                        <MdMail className='absolute top-[35%] right-3' />
                    </div>
                    <div className='w-full relative'>
                        <input
                            name="password"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type={showPassword ? 'text' : 'password'} // Toggle input type
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            value={password}
                        />
                        <FaLock className='absolute top-[35%] right-10' />
                        <button
                            type="button"
                            className='absolute top-[35%] right-3'
                            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='text-[14px] flex gap-2'>
                            <input type='checkbox' name='' id='' />
                            <label htmlFor=''>Remember Me</label>
                        </div>
                        <span className='text-[14px] cursor-pointer' onClick={() => navigate('/forgot-password')}>Forget Password?</span>
                    </div>
                    <button className='my-4 py-2 w-full rounded-full bg-blue-600'>Login</button>
                    <SignInWithGoogle handleGoogleSignIn={handleGoogleSignIn} />
                    <span className='text-[14px] pt-2'>Don't have an account? <span className='font-semibold cursor-pointer' onClick={() => navigate('/register')}>Register</span></span>
                </form>
            </div>
        </div>
    );
}

export default Login;
