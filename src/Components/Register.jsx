
import { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db, storage } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import SignInWithGoogle from './SignInWithGoogle';

const provider = new GoogleAuthProvider();

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        digit: false,
        specialChar: false,
    });
    const [showPasswordRules, setShowPasswordRules] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility
    const navigate = useNavigate();

    const validatePasswordInput = (newPassword) => {
        setPasswordValidation({
            length: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            lowercase: /[a-z]/.test(newPassword),
            digit: /\d/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name) {
            toast.error("Name is required.");
            return;
        }

        if (!email.includes('@')) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if (signInMethods.length > 0) {
                toast.error("This email is already registered.");
                return;
            }

            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            let profilePicURL = '';

            if (user && profilePic) {
                const storageRef = ref(storage, `profilePictures/${user.uid}`);
                await uploadBytes(storageRef, profilePic);
                profilePicURL = await getDownloadURL(storageRef);
            }

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name,
                    password: password,
                    photo: profilePicURL,
                });
            }
            toast.success("User Registered Successfully");
            navigate('/login');

        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userEmail = user.email;

            // Check if the email is already registered
            const signInMethods = await fetchSignInMethodsForEmail(auth, userEmail);
            if (signInMethods.length > 0) {
                toast.error("This email is already registered.");
                return;
            }

            // Register user in Firestore if email is not in use
            await setDoc(doc(db, "Users", user.uid), {
                email: userEmail,
                name: user.displayName || 'User',
                photo: user.photoURL || '',  // Optional
            });

            toast.success("User Registered Successfully with Google");
            navigate('/welcome');

        } catch (error) {
            console.error('Firebase Error:', error);
            toast.error(error.message);
        }
    };

    return (
        <div className='h-[100vh] flex flex-col items-center bg-background bg-cover justify-center text-white'>
            <div className='h-[580px] w-80 bg-blue-600/20 border border-blue-600/20 backdrop-blur-lg rounded-lg px-6 my-4 pt-12 overflow-hidden'>
                <h2 className='text-3xl font-bold pb-6 text-center'>Register</h2>
                <form className='flex flex-col items-center ' onSubmit={handleRegister}>
                    <div className='w-full relative'>
                        <input
                            name="name"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FaUser className='absolute top-[35%] right-3' />
                    </div>
                    <div className='w-full relative'>
                        <input
                            name="email"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MdMail className='absolute top-[35%] right-3' />
                    </div>
                    <div className='w-full relative'>
                        <input
                            name="password"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type={passwordVisible ? "text" : "password"} // Toggle password visibility
                            placeholder="Enter Your Password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePasswordInput(e.target.value);
                                setShowPasswordRules(true); // Show rules when user starts typing
                            }}
                        />
                        <FaLock className='absolute top-[35%] right-10' />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
                            className='absolute top-[35%] right-3'
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {showPasswordRules && (
                        <div className='w-full'>
                            <ul className='text-sm'>
                                <li className={`flex items-center ${passwordValidation.length ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordValidation.length ? '✓' : '✗'} Minimum 8 characters
                                </li>
                                <li className={`flex items-center ${passwordValidation.uppercase ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordValidation.uppercase ? '✓' : '✗'} At least one uppercase letter
                                </li>
                                <li className={`flex items-center ${passwordValidation.lowercase ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordValidation.lowercase ? '✓' : '✗'} At least one lowercase letter
                                </li>
                                <li className={`flex items-center ${passwordValidation.digit ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordValidation.digit ? '✓' : '✗'} At least one digit
                                </li>
                                <li className={`flex items-center ${passwordValidation.specialChar ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordValidation.specialChar ? '✓' : '✗'} At least one special character
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className='w-full relative'>
                        <input
                            name="profilePic"
                            className='border border-gray-200 w-full rounded-full px-4 py-2 my-2 bg-transparent'
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProfilePic(e.target.files[0])}
                        />
                    </div>

                    <button className='my-4 py-2 w-full rounded-full bg-blue-600'>Register</button>
                    <SignInWithGoogle handleGoogleSignIn={handleGoogleSignIn} />
                    <span className='text-[14px] pt-2'>Already have an account? <span className='font-semibold cursor-pointer' onClick={() => window.location.href = '/login'}>Login</span></span>
                </form>
            </div>
        </div>
    );
}

export default Register;



