import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
    const socialLink = [
        {
            "id": "github",
            "link": "https://github.com/AlexDDevv",
            "icon": <Github className='text-card-foreground transition hover:scale-105 hover:text-white' />
        },
        {
            "id": "linkedin",
            "link": "https://www.linkedin.com/in/alexis-delporte/",
            "icon": <Linkedin className='text-card-foreground transition hover:scale-105 hover:text-white' />
        },
        {
            "id": "twitter",
            "link": "https://twitter.com/Sport_DevWeb",
            "icon": <Twitter className='text-card-foreground transition hover:scale-105 hover:text-white' />
        }
    ]

    return (
        <footer className='bg-card flex items-center justify-between max-w-[1440px] my-0 mx-auto border border-border rounded-xl py-4 px-5'>
            <Logo />
            <Link href="/mentions" className='font-bodyFont text-card-foreground text-lg font-medium transition-transform hover:scale-110'>Mentions légales</Link>
            <ul className='flex items-center justify-center gap-5'>
                {socialLink.map(social => (
                    <li key={social.id}>
                        <a href={social.link} target='blank'>
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
