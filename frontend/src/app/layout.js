import './globals.css';

export const metadata = {
  title: 'ShowCon',
  description: 'Ease your ticket bookings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
