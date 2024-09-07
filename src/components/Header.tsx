import React from 'react'
import Logo from './Logo'
import data from "../data/data.json"
import Link from 'next/link'
import ResearchForm from './form/ResearchForm'
import NavBarBtn from './ui/NavBarBtn'

export default function Header() {
    return (
        <header className='bg-card flex items-center justify-between rounded-xl px-5 py-4 border border-border max-w-[1440px] mx-auto mt-0 mb-[100px]'>
            <Logo />
            <nav className='flex items-center gap-[50px]'>
                <ul className='flex items-center justify-center gap-[50px]'>
                    {data.navLink.map((link, i) => (
                        <li className='transition-transform hover:scale-110' key={i}>
                            <Link href={link.link} className='font-bodyFont text-card-foreground text-lg font-medium'>{link.content}</Link>
                        </li>
                    ))}
                </ul>
                <ResearchForm />
            </nav>
            <NavBarBtn />
        </header>
    )
}
