"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuthentication = () => {
      const loginDetails = localStorage.getItem('loginDetails');
      const token = loginDetails ? JSON.parse(loginDetails).token : null;

      console.log("token", token);

      if (token) {
        setAuthenticated(true);
      } else {
        setUserRoles([]);
        setAuthenticated(false);
        router.push('/login');
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, [router]);

  return { authenticated, userRoles, isLoading };
};


// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';

// export const useAuthentication = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [userRoles, setUserRoles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const checkAuthentication = () => {
//       const loginDetails = localStorage.getItem('loginDetails');
//       const token = loginDetails ? JSON.parse(loginDetails).token : null;

//       console.log("token", token);

//       if (token) {
//         setAuthenticated(true);
//       } else {
//         setUserRoles([]);
//         setAuthenticated(false);
//         router.push('/login');
//       }
//       setIsLoading(false);
//     };

//     checkAuthentication();
//   }, [router]);

//   return { authenticated, userRoles, isLoading };
// };

