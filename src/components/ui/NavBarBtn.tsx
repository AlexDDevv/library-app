import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBarBtn() {
    const pathname = usePathname()
    const { data: session } = useSession();
    const router = useRouter()

    const profilePage = () => {
        router.push("/userProfile")
    }

    return (
        <>
            {pathname === "/userProfile" ? (
                <button
                    className='bg-destructive py-[5px] px-4 text-destructive-foreground font-semibold rounded-md cursor-pointer'
                    onClick={() => signOut({
                        redirect: true,
                        callbackUrl: "/"
                    })}
                >Déconnexion
                </button>
            ) : (
                <button className='bg-primary py-[5px] px-4 text-primary-foreground font-semibold rounded-md cursor-pointer w-[130px]' onClick={!session ? () => signIn() : profilePage}>{!session ? "Se connecter" : "Profil"}</button>
            )
            }
        </>
    )
}
