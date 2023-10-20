'use client';

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const TopbarMainMenu = () => {
  const currentPath = usePathname();

  const links = [
      {label: 'Dashboard', href: '/'},
      {label: 'Account', href: '/account'},
  ]

  return (
    <nav className='flex space-x-4 border-b-2 mb-5 px-10 py-5 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-8'>
            {links.map(link => <Link key={link.href} className={`${link.href === currentPath ? 'text-sky-800' : 'text-sky-400'} hover:text-sky-600 transition-colors`} 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default TopbarMainMenu