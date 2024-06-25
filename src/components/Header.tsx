import React from 'react'
import Link from 'next/link'
import logo from "../assets/img/logo.png"
import Image from 'next/image'

export default function Header() {
    return (
        <header className='bg-transparent flex items-center justify-between rounded-xl px-5 py-4 border border-border w-[85%] mx-auto mt-0 mb-[100px]'>
            <div className='flex items-center justify-center gap-[5px]'>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt='Logo du site'
                />
                <p className='font-quoteFont text-title'>Read Soul</p>
            </div>
            <nav>
                <ul className='flex items-center justify-center gap-[50px]'>
                    <li className='transition-transform hover:scale-110'>
                        <Link href="/" className='text-text text-lg font-medium'>Accueil</Link>
                    </li>
                    <li className='transition-transform hover:scale-110'>
                        <Link href="/recherche" className='text-text text-lg font-medium'>Recherche</Link>
                    </li>
                    <li className='transition-transform hover:scale-110'>
                        <Link href="/bibliotheque" className='text-text text-lg font-medium'>Bibliothèque</Link>
                    </li>
                </ul>
            </nav>
            <button className='bg-bgBtn py-2 px-4 text-white/95 font-semibold rounded-md cursor-pointer'>S'inscrire</button>
        </header>
    )
}
