import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn } from "next-auth/react";

export default function NavBarBtn() {
    const { data: session } = useSession();
    const router = useRouter()

    const profilePage = () => {
        router.push("/userProfile")
    }

    return (
        <button className='bg-primary py-2 px-4 text-primary-foreground font-semibold rounded-md cursor-pointer w-[130px]' onClick={!session ? () => signIn() : profilePage}>{!session ? "Se connecter" : "Profil"}</button>
    )
}
