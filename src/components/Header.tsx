import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import NavBarBtn from './ui/NavBarBtn'

export default function Header() {
    return (
        <header className='bg-card flex items-center justify-between rounded-xl px-5 py-4 border border-border max-w-[1440px] mx-auto mt-0 mb-[100px]'>
            <Logo />
            <nav>
                <ul className='flex items-center justify-center gap-[50px]'>
                    <li className='transition-transform hover:scale-110'>
                        <Link href="/recherche" className='font-bodyFont text-card-foreground text-lg font-medium'>Recherche</Link>
                    </li>
                    <li className='transition-transform hover:scale-110'>
                        <Link href="/bibliotheque" className='font-bodyFont text-card-foreground text-lg font-medium'>Bibliothèque</Link>
                    </li>
                </ul>
            </nav>
            <NavBarBtn />
        </header>
    )
}
