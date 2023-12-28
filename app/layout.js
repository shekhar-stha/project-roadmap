import { Inter } from 'next/font/google'
import './styles/css/global.css';
import './styles/scss/_global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'poppins'
import StoreProvider from './StoreProvider';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
