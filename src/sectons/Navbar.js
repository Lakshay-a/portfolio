import React from 'react'
import Link from "next/link"
import Logo from '@/components/Logo'

function Navbar() {
  return (
    <nav>
        <div className='wrapper'>
            <div className="brand">
                <Link href="">
                    <Logo />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar