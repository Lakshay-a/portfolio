import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/sectons/Navbar'
import Socialicons from '@/components/Socialicons'

export default function Home() {
  return (
    <main className='app'>
      <Navbar />
      <Socialicons />
    </main>
  )
}
