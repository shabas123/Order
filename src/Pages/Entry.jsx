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
                }, 2000);
                return () => clearTimeout(timer);
            } else {
                // ✅ not mobile → go to home even if not logged in
                navigate('/');
            }
        }
    }, [loggedInUser, navigate]);

    return (
      <div>
<img
  src="https://s3.eu-central-1.amazonaws.com/uberall-userpics-prod/3486272/medium_l8qtMML18s.jpg"
  alt="Delivery"
  style={{ height: "100vh", width: "100vw",  }}
  loading="eager"
  decoding="async"
/></div>
    );
}
