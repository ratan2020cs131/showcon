import './globals.css';

export const metadata = {
  title: 'Showcon',
  description: 'Ease your event tickets booking experience',
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
