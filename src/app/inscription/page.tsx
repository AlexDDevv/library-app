'use client'
import React from 'react'
import RegisterForm from '@/components/form/RegisterForm'
import { useRouter } from 'next/navigation'

export default function Inscription() {
    const router = useRouter()

    const signInPage = () => {
        router.push("/connexion")
    }

    return (
        <section className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-titleFont text-foreground font-bold mb-10'>Inscription</h1>
            <RegisterForm
                signInPage={signInPage}
            />
        </section>
    )
}
