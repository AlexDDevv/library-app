import React from 'react'
import logo from "../assets/img/logo.png"
import Image from 'next/image'

export default function Logo() {
    return (
        <div className='flex items-center justify-center gap-[5px]'>
            <Image
                src={logo}
                width={50}
                height={50}
                alt='Logo du site'
            />
            <p className='font-quoteFont text-card-foreground'>Read Soul</p>
        </div>
    )
}
