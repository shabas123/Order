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
            navigate('/'); // ✅ already logged in → go to home for all devices
        } else {
            if (isMobile) {
                // ✅ show animation then go to login
                const timer = setTimeout(() => {
                    navigate('/');
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                // ✅ not mobile → go to home even if not logged in
                navigate('/');
            }
        }
    }, [loggedInUser, navigate]);

    return (
      <div>
            {/* Only mobile will stay here for 4 seconds */}
            <img src="https://thumbs.dreamstime.com/b/night-fast-food-delivery-service-mobile-hours-app-phone-180882104.jpg" style={{height:"100vh",width:"100%",objectFit:"cover"}} alt="" />
        </div>
    );
}
