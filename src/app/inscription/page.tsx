'use client'
import React from 'react'
import Image from 'next/image'
import googleIcon from "../../assets/img/googleIcon.png"
import { useRouter } from 'next/navigation'

export default function Inscription() {
    const router = useRouter()

    const signInPage = () => {
        router.push("/connexion")
    }

  return (
    <section className='flex flex-col items-center justify-center pt-16'>
            <h1 className='text-2xl font-titleFont text-foreground font-bold mb-10'>Inscription</h1>
            <form action="" className='bg-card text-card-foreground p-8 rounded-lg w-[35%] min-w-[450px] mb-5'>
                <div className='mb-5'>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="email" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1'>Adresse email</label>
                        <input type="text" id='email' name='email' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
                    </div>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="text" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1'>Nom d'utilisateur</label>
                        <input type="text" id='text' name='text' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
                    </div>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="password" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1'>Mot de passe</label>
                        <input type="password" id='password' name='password' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
                    </div>
                </div>
                <button className='w-full bg-primary text-primary-foreground font-bodyFont text-sm font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 mb-10'>S'inscrire</button>
                <div className="relative mb-5">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                    </div>
                </div>
                <button className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full">
                    <Image
                        src={googleIcon}
                        alt='Icon de Google'
                        className='h-[16px] w-[16px] mr-2'
                    />
                    Google
                </button>
            </form>
            <p className='text-muted-foreground'>Tu as déjà un compte? <span className='text-primary font-medium cursor-pointer transition-colors hover:text-primary/90' onClick={signInPage}>Connecte toi!</span></p>
        </section>
  )
}
