import React from 'react'
import { X } from "lucide-react"

interface EditorMenuProps {
    closeEditor: () => void
}

export default function EditorMenu({ closeEditor }: EditorMenuProps) {
    return (
        <div className='text-white bg-popover rounded-[10px] p-6 w-1/2 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
            <div className='flex items-start justify-between mb-[30px]'>
                <div>
                    <h3 className='font-titleFont font-medium text-lg text-popover-foreground'>Éditer votre profil</h3>
                    <p className='font-bodyFont text-popover-foreground'>Rentrez vos informations et sauvegardez les.</p>
                </div>
                <X className='text-popover-foreground cursor-pointer' onClick={closeEditor} />
            </div>
            <form className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[8px]'>
                    <label htmlFor="url" className='font-bodyFont font-semibold text-sm text-popover-foreground'>URL du profil <span className='text-xs text-accent-foreground'>(library-app.fr/userProfil/[ici])</span></label>
                    <input type="text" name='urlProfil' id='url' placeholder="Nom d'utilisateur" className='bg-input rounded py-2 pl-3 font-bodyFont text-xs text-accent-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring' />
                </div>
                <div className='flex justify-between gap-10'>
                    <div className='flex flex-col gap-[8px] w-1/2'>
                        <label htmlFor="github" className='font-bodyFont font-semibold text-sm text-popover-foreground'>Github</label>
                        <input type="text" name='githubProfil' id='github' placeholder="Profil Github" className='bg-input rounded py-2 pl-3 font-bodyFont text-xs text-accent-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring' />
                    </div>
                    <div className='flex flex-col gap-[8px] w-1/2'>
                        <label htmlFor="linkedin" className='font-bodyFont font-semibold text-sm text-popover-foreground'>LinkedIn</label>
                        <input type="text" name='linkedinProfil' id='linkedin' placeholder="Profil LinkedIn" className='bg-input rounded py-2 pl-3 font-bodyFont text-xs text-accent-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring' />
                    </div>
                </div>
                <div className='flex justify-between gap-10'>
                    <div className='flex flex-col gap-[8px] w-1/2'>
                        <label htmlFor="twitter" className='font-bodyFont font-semibold text-sm text-popover-foreground'>Twitter (sans @)</label>
                        <input type="text" name='twitterProfil' id='twitter' placeholder="Profil Twitter" className='bg-input rounded py-2 pl-3 font-bodyFont text-xs text-accent-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring' />
                    </div>
                    <div className='flex flex-col gap-[8px] w-1/2'>
                        <label htmlFor="instagram" className='font-bodyFont font-semibold text-sm text-popover-foreground'>Instagram (sans @)</label>
                        <input type="text" name='instagramProfil' id='instagram' placeholder="Profil Instagram" className='bg-input rounded py-2 pl-3 font-bodyFont text-xs text-accent-foreground placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring' />
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <label htmlFor="description" className='font-bodyFont font-semibold text-sm text-popover-foreground'>Description</label>
                    <textarea name="description" id="description" maxLength={150} placeholder='Dites en plus sur vous...' className='resize-none w-full bg-input font-bodyFont text-xs py-2 pl-3 rounded placeholder:text-accent-foreground h-[60px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'></textarea>
                </div>
                <button className='bg-primary font-bodyFont font-bold text-xs text-primary-foreground py-[6px] px-[15px] rounded max-w-[90px] my-0 mr-0 ml-auto'>Enregistrer</button>
            </form>
        </div>
    )
}
