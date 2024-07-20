"use client"
import React, { useState} from 'react'
import { useSession } from "next-auth/react";
import Header from '@/components/Header';
import NavBarBtn from '@/components/ui/NavBarBtn';
import EditorMenu from '@/components/form/EditorMenu';
import Footer from '@/components/Footer';
import { ImagePlus } from "lucide-react"
import Link from 'next/link';

export default function page() {
    const { data: session } = useSession();
    const [showEditor, setShowEditor] = useState(false)

    const showEditorMenu = () => {
        setShowEditor(!showEditor)
    }

    const closeEditor = () => {
        setShowEditor(!showEditor)
    }

    return (
        <>
            {session ? (
                <>
                    <Header />
                    <section className='max-w-[1440px] mx-auto mb-[100px]'>
                        <div className='flex items-start justify-between gap-[100px] mb-20'>
                            <div className='max-w-[250px]'>
                                <div className='flex items-center gap-5 mb-[10px]'>
                                    <div className='h-[150px] w-[150px] rounded-full bg-card border border-border flex items-center justify-center'>
                                        <ImagePlus className='h-[30px] w-[30px] text-card-foreground cursor-pointer' />
                                    </div>
                                    <div>
                                        <p className='font-bodyFont font-bold text-xl text-foreground mb-[10px]'>{session?.user.username}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onClick={showEditorMenu} className="lucide lucide-user-pen text-foreground cursor-pointer"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
                                    </div>
                                </div>
                                <p className='font-bodyFont text-foreground'>Personnalisez votre profil en y ajoutant des informations</p>
                            </div>
                            <div className='bg-card rounded-xl border border-border flex items-center justify-center flex-col gap-[10px] text-center h-[250px] w-full p-7'>
                                <ImagePlus className='h-[50px] w-[50px] text-card-foreground cursor-pointer' />
                                <p className='font-bodyFont text-foreground max-w-[400px] mx-auto'>Personnalisez votre profil en ajoutant une bannière 
                                visible par la communauté</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-titleFont font-bold text-xl text-foreground tracking-widest text-center uppercase mb-[50px]'>Mes livres favoris</h1>
                            <div className='flex items-center justify-between gap-5 w-full'>
                                <div className='bg-card rounded-[10px] w-[250px] h-[430px] shadow-[0_5px_5px_2px_rgb(0,0,0,0.25)]'>

                                </div>
                                <div className='bg-card rounded-[10px] w-[250px] h-[430px] shadow-[0_5px_5px_2px_rgb(0,0,0,0.25)]'>

                                </div>
                                <div className='bg-card rounded-[10px] w-[250px] h-[430px] shadow-[0_5px_5px_2px_rgb(0,0,0,0.25)]'>

                                </div>
                                <div className='bg-card rounded-[10px] w-[250px] h-[430px] shadow-[0_5px_5px_2px_rgb(0,0,0,0.25)]'>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='bg-muted p-[50px] flex flex-col gap-20 mb-[100px]'>
                        <div>
                            <div className='flex items-center gap-[30px] w-full bg-card rounded py-5 pl-[30px] mb-10'>
                                <h2 className='font-titleFont font-semibold text-muted-foreground uppercase tracking-widest'>Mes lectures</h2>
                                <Link href="/bibliotheque" className='font-bodyFont font-medium text-card-foreground italic'>Voir plus</Link>
                            </div>
                            <p className='font-bodyFont font-medium text-lg text-muted-foreground'>Vous n'avez pas encore enregistré de livres.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-[30px] w-full bg-card rounded py-5 pl-[30px] mb-10'>
                                <h2 className='font-titleFont font-semibold text-muted-foreground uppercase tracking-widest'>Auteurs</h2>
                                <Link href="/bibliotheque" className='font-bodyFont font-medium text-card-foreground italic'>Voir plus</Link>
                            </div>
                            <p className='font-bodyFont font-medium text-lg text-muted-foreground'>Vous n'avez pas encore enregistré de livres.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-[30px] w-full bg-card rounded py-5 pl-[30px] mb-10'>
                                <h2 className='font-titleFont font-semibold text-muted-foreground uppercase tracking-widest'>Mes critiques</h2>
                                <Link href="/bibliotheque" className='font-bodyFont font-medium text-card-foreground italic'>Voir plus</Link>
                            </div>
                            <p className='font-bodyFont font-medium text-lg text-muted-foreground'>Vous n'avez pas encore émis de critique.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-[30px] w-full bg-card rounded py-5 pl-[30px] mb-10'>
                                <h2 className='font-titleFont font-semibold text-muted-foreground uppercase tracking-widest'>Critiques sur mes lectures</h2>
                                <Link href="/bibliotheque" className='font-bodyFont font-medium text-card-foreground italic'>Voir plus</Link>
                            </div>
                            <p className='font-bodyFont font-medium text-lg text-muted-foreground'>Aucune critique n'a encore été émis sur les livres que vous avez lu.</p>
                        </div>
                    </section>
                    {showEditor && (
                        <>
                            <EditorMenu 
                                closeEditor={closeEditor}
                            />
                            <div className='bg-black/80 w-full h-full fixed top-0 left-0 z-40' onClick={closeEditor}></div>
                        </>
                    )}
                    <Footer />
                </>
            ) : (
                <div className='text-center'>
                    <h1 className='font-titleFont text-foreground font-bold text-5xl leading-[60px] max-w-[725px] mx-auto mb-10 mt-20'>Il faut être connecté pour accéder à son profil</h1>
                    <NavBarBtn />
                </div>
            )}
        </>
    )
}