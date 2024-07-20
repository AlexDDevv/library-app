import React from 'react'
import Logo from './Logo'
import RegisterBtn from './ui/NavBarBtn'
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
            <RegisterBtn />
            <ul className='flex items-center justify-center gap-5'>
                {socialLink.map(social => (
                    <li className="footer-li" key={social.id}>
                        <a href={social.link} target='blank'>
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
