import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import defaultProfilePic from '../assets/default-profile.png'; // Add your default image path

function Welcome() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("User document not found");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/";
            toast.success("User logged out successfully!");
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='h-[100vh] flex flex-col items-center bg-background bg-cover justify-center text-white text-center'>
            <div className='h-[350px] w-90 bg-blue-600/20 border border-blue-600/20 backdrop-blur-lg rounded-lg px-6 my-4 flex flex-col items-center justify-center overflow-hidden'>
                {userDetails ? (
                    <>
                        <div className="flex justify-center">
                            <img
                                src={userDetails.photo || defaultProfilePic}
                                className="rounded-full w-32 h-32 object-cover"
                                alt="Profile"
                            />
                        </div>
                        <h3 className="pb-4 mt-4">Welcome {userDetails.name} 🙏</h3>
                        <div>
                            <p><span className="font-bold text-yellow-500">Email: </span>{userDetails.email}</p>
                            <p><span className="font-bold text-yellow-500">Name: </span>{userDetails.name}</p>
                        </div>
                        <button className='py-2 w-[100px] rounded-full bg-blue-600 mt-10' onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Welcome;

