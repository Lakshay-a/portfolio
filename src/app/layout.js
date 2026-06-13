import styles from '@/scss/index.scss'

export const metadata = {
  title: 'Lakshay Arora',
  description: "Lakshay Arora's Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
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
