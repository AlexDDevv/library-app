import React from 'react'
import Logo from './Logo'
import RegisterBtn from './SignInBtn'
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
            "link": "https://www.linkedin.com/in/alexis-delporte-8371362b8/",
            "icon": <Linkedin className='text-card-foreground transition hover:scale-105 hover:text-white' />
        },
        {
            "id": "twitter",
            "link": "https://twitter.com/Sport_DevWeb",
            "icon": <Twitter className='text-card-foreground transition hover:scale-105 hover:text-white' />
        }
    ]

    return (
        <footer className='flex items-center justify-between w-[65%] my-0 mx-auto border border-border rounded-xl py-4 px-5'>
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