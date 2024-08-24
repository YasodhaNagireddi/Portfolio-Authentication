import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Reset link sent to your email. Check it!');
            setEmail('');
        } catch (error) {
            console.error('Error sending reset email:', error.message);
            toast.error(error.message);
        }
    };



    return (
        <div className='h-[100vh] flex flex-col items-center bg-background bg-cover justify-center text-white'>
            <div className='h-[330px] w-80 bg-blue-600/20 border border-blue-600/20 backdrop-blur-lg rounded-lg px-6 my-4   pt-12 overflow-hidden'>
                <h2 className='text-3xl font-bold pb-6 text-center'>Forgot Password</h2>
                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <div className='w-full relative'>
                        <input
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent' type="text"
                            placeholder="Enter Email or Mobile Number" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='my-4 py-2 w-full rounded-full bg-blue-600'>Send OTP</button>

                    <button className='my-4 py-2 w-full rounded-full bg-blue-600' onClick={() => navigate('/login')}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;


