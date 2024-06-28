import React from 'react'
import { useRouter } from 'next/navigation'

export default function SignInBtn() {
    const router = useRouter()

    const signInBtn = () => {
        router.push("/connexion")
    }

    return (
        <button className='bg-primary py-2 px-4 text-primary-foreground font-semibold rounded-md cursor-pointer w-[130px]' onClick={signInBtn}>Se connecter</button>
    )
}
