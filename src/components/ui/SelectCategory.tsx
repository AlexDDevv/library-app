import React, { useState } from 'react'
import { ChevronsUpDown, Check } from "lucide-react"
import { motion, Variants, MotionProps, AnimatePresence } from 'framer-motion'

export default function SelectCategory() {
    const [showCategory, setShowCategory] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>("Toutes catégories")

    const handleCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowCategory(!showCategory)
    }

    const selectCategory = (category: string) => {
        setSelectedCategory(category)
        setShowCategory(!showCategory)
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

    const categories = ["Toutes catégories", "Romans", "Mangas", "BD"];

    return (
        <div className='flex flex-col w-[300px] mx-auto gap-[10px]'>
            <button
                className='flex items-center justify-between bg-input px-[10px] py-[9px] w-full rounded border-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                onClick={handleCategories}
            >
                <p className='font-bodyFont text-sm text-accent-foreground'>{selectedCategory}</p>
                <ChevronsUpDown className='h-4 w-4 text-accent-foreground' />
            </button>
            <AnimatePresence>
                {showCategory && (
                    <motion.div
                        className='w-full bg-input rounded p-[10px]'
                        initial="closed"
                        animate={showCategory ? "open" : "closed"}
                        exit="closed"
                        variants={menuVariants}
                    >
                        {categories.map((category, i) => (
                            <motion.div
                                key={i}
                                className={`rounded px-[10px] py-2 cursor-pointer transition-colors mb-[10px] last:mb-0 flex items-center justify-between ${selectedCategory === category ? 'bg-accent' : 'hover:bg-accent'}`}
                                onClick={() => selectCategory(category)}
                                {...itemVariants}
                            >
                                <p className='font-bodyFont text-sm text-accent-foreground'>{category}</p>
                                {selectedCategory === category && (
                                    <Check className='text-accent-foreground h-[10px] w-[10px]' />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
