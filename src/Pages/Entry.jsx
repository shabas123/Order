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
            <video src="https://media.istockphoto.com/id/2161798575/video/burger-falling-beef-bun-vegetables-slow-motion-depth-of-field.mp4?s=mp4-640x640-is&k=20&c=eheA3gwLHs7zuPBpry1doR8qHg8bUVgl5_v1Kg5TON4=" autoPlay  style={{height:"200px", width: "100%", objectFit: "cover",borderRadius:"20px", marginTop:"150px" }}
></video>
          </div>
    );
}
