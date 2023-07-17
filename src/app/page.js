import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/sections/Navbar'
import Socialicons from '@/components/Socialicons'
import Intro from '@/sections/Intro'
import About from '@/sections/About'

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <Socialicons />
      <main>
        <Intro />
        <About />
      </main>
    </div>
  )
}
