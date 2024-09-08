import React, { useState } from 'react'
import { BookmarkPlus, ChevronsUpDown, BookOpenCheck, Pause, BookCheck, Trash2 } from "lucide-react"
import { motion, Variants, MotionProps, AnimatePresence } from 'framer-motion'

export default function SelectBookState() {
    const [openBtn, setOpenBtn] = useState(false)
    const [selectedState, setSelectedState] = useState<string>("À lire")

    const showBookState = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setOpenBtn(!openBtn)
    }

    const selectedStateBook = (state: string) => {
        setSelectedState(state)
        setOpenBtn(!openBtn)
    }

    const menuVariants: Variants = {
        closed: {
            scale: 0,
            transition: {
                delay: 0.15,
            },
        },
        open: {
            scale: 1,
            transition: {
                type: "spring",
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants: MotionProps = {
        variants: {
            closed: { x: -16, opacity: 0 },
            open: { x: 0, opacity: 1 },
        },
        transition: { opacity: { duration: 0.2 } },
    };

    const bookState = [
        {
            "icon": <BookmarkPlus className='h-5 w-5' />,
            "content": "À lire"
        },
        {
            "icon": <BookOpenCheck className='h-5 w-5' />,
            "content": "En cours"
        },
        {
            "icon": <Pause className='h-5 w-5' />,
            "content": "En pause"
        },
        {
            "icon": <BookCheck className='h-5 w-5' />,
            "content": "Lu"
        },
        {
            "icon": <Trash2 className='h-5 w-5' />,
            "content": "Supprimer"
        }
    ]

    const getIconForSelectedState = (state: string) => {
        const foundState = bookState.find((item) => item.content === state);
        return foundState ? foundState.icon : <BookmarkPlus className="h-5 w-5" />;
    };

    return (
        <div className='flex flex-col w-[200px] relative'>
            <button type='button' className='flex items-center justify-between w-full bg-primary py-2 px-4 rounded-md transition-colors hover:bg-primary/90' onClick={showBookState}>
                <div className='flex items-center gap-x-4'>
                    {getIconForSelectedState(selectedState)}
                    <p className='font-bodyFont font-semibold text-primary-foreground'>{selectedState}</p>
                </div>
                <ChevronsUpDown className='text-primary-foreground h-4 w-4' />
            </button>
            <AnimatePresence>
                {openBtn && (
                    <motion.div
                        className='bg-card w-full flex flex-col gap-y-2 rounded-md p-4 absolute top-full mt-2'
                        initial="closed"
                        animate={openBtn ? "open" : "closed"}
                        exit="closed"
                        variants={menuVariants}
                    >
                        {bookState.map(state => (
                            <motion.div
                                className={`flex items-center gap-x-4 py-2 cursor-pointer text-card-foreground rounded-md transition-stateBook hover:bg-card-foreground hover:text-card hover:pl-4 ${selectedState === state.content ? 'bg-card-foreground text-card pl-4' : 'hover:bg-card-foreground'}`}
                                onClick={() => selectedStateBook(state.content)}
                                {...itemVariants}

                            >
                                <div>{state.icon}</div>
                                <p className='font-bodyFont font-semibold'>{state.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
