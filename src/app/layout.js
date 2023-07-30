import styles from '@/scss/index.scss'
import Head from 'next/head'

export const metadata = {
  title: 'Lakshay Arora',
  description: "Lakshay Arora's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Lakshay Arora</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  )
}
