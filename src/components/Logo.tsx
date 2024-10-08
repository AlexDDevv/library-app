import React from 'react'
import logo from "../assets/img/logo.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className='flex items-center justify-center gap-[5px]'>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt='Logo du site'
                />
                <p className='font-quoteFont text-card-foreground'>Read Soul</p>
            </div>
        </Link>
    )
}
