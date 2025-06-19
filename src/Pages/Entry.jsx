import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Entry() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem("loggedInUser");
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (loggedInUser) {
            navigate('/home'); // ✅ already logged in → go to home for all devices
        } else {
            if (isMobile) {
                // ✅ show animation then go to login
                const timer = setTimeout(() => {
                    navigate('/home');
                }, 5000);
                return () => clearTimeout(timer);
            } else {
                // ✅ not mobile → go to home even if not logged in
                navigate('/home');
            }
        }
    }, [loggedInUser, navigate]);

    return (
        <div>
            {/* Only mobile will stay here for 4 seconds */}
            <video src="https://cdn.pixabay.com/video/2025/02/18/259141_large.mp4" autoPlay  style={{height:"700px", width: "100%", objectFit: "cover",borderRadius:"10px" }}
></video>
          
        </div>
    );
}
