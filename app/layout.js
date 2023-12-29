"use client"
import './styles/css/global.css';
import './styles/scss/_global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'poppins'
import StoreProvider from './StoreProvider';
import { useAuth } from '@/hooks/useAuthentication';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function RootLayout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const loginDetails = localStorage.getItem('loginDetails')
    const token = loginDetails ? JSON.parse(loginDetails).token : null;

    console.log("token", token)

    if (token) {
      setAuthenticated(true);
    } else {
      setUserRoles([]);
      setAuthenticated(false);
      router.push('/login')
      toast.error('You are not logged in.')
    }
    setIsLoading(false)
  }, []);

  const isLoginPage = pathname === '/login'
  return (
    <html lang="en">
      <body>
        {
          isLoginPage || authenticated ?
          (
            <StoreProvider>
              {children}
            </StoreProvider>
          ) : null
        }
      </body>
    </html>
  )
}
