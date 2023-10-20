import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai';

const TopbarMainMenu = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Account', href: '/'},
        {label: 'Boba', href: '/'},
        {label: 'jaja', href: '/'},
    ]
  return (
    <nav className='flex space-x-4 border-b-4 mb-5 px-10 py-5 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-8'>
            {links.map(link => <Link key={link.href} className='text-sky-700 hover:text-sky-400 transition-colors' 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default TopbarMainMenu