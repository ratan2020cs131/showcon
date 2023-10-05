import './globals.css';
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'ShowCon',
  description: 'Ease your ticket bookings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
