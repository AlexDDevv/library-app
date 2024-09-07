"use client"
import React, { useState, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star } from "lucide-react"

export default function Search() {
    // const searchParams = useSearchParams()
    // const initialQuery = searchParams.get("query") || ""
    // const [search, setSearch] = useState(initialQuery)
    const [research, setReSearch] = useState("")
    const [bookData, setBookData] = useState([])
    const [submitForm, setSubmitForm] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (research.trim() !== "") {
            setSubmitForm(true);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') 
            .replace(/^-+|-+$/g, ''); 
    };

    const searchLower = research.toLowerCase();

    useEffect(() => {
        if (submitForm) {
            const searchBooks = async () => {
                try {
                    const res = await fetch(`https://openlibrary.org/search.json?q=${research}`);
                    if (!res.ok) {
                        throw new Error("Erreur lors de la recherche de livres");
                    }
                    const data = await res.json();
                    setBookData(data.docs);
                    console.log(data.docs);
                } catch (error) {
                    console.error("Erreur lors de la recherche de livres :", error);
                }
            };
            searchBooks();
        }
    }, [submitForm, research]);

    return (
        <>
            <Header />
            <section className='mb-36'>
                <h1 className='font-titleFont font-bold text-xl text-foreground tracking-widest text-center uppercase mb-[50px]'>Rechercher un livre</h1>
                <form className='w-[500px] mx-auto mb-6' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='research'
                        placeholder='Rechercher des livres...'
                        className='bg-input font-bodyFont text-sm text-accent-foreground pl-[10px] py-2 rounded w-full border border-border placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                        value={research}
                        onChange={e => setReSearch(e.target.value)}
                    />
                </form>
            </section>
            <section className='px-24'>
                <div className='w-full grid grid-cols-3 gap-y-24 gap-x-12'>
                    {bookData.length > 0 && (
                        bookData.map((book, i) => (
                            <React.Fragment key={i}>
                                {book.cover_i && book.title.toLowerCase() === searchLower && (
                                    <div className='bg-card w-[300px] mx-auto rounded-xl border border-border transition-all duration-200 ease-in-outout hover:scale-[1.02] shadow-[0_10px_15px_-3px_rgba(43,42,41,0.5)] hover:shadow-[0_10px_15px_-3px_rgba(43,42,41)]'>
                                        <Link href={`/livres/${book.isbn[0]}`} className='flex flex-col items-center justify-between text-center gap-5 p-6 h-full'>
                                            <div className='w-[180px] h-[280px]'>
                                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Image de couverture du livre ${book.title}`} className='rounded-md w-full h-full' />
                                            </div>
                                            <div className='flex flex-col items-center justify-between'>
                                                <div className='mb-6'>
                                                    <h2 className='font-titleFont font-bold text-lg text-card-foreground mb-2.5'>{book.title}</h2>
                                                    <h3 className='font-titleFont font-medium text-card-foreground'>{book.author_name}</h3>
                                                </div>
                                                <div className='flex items-center justify-center gap-2.5'>
                                                    <Star className='text-card-foreground' />
                                                    <Star className='text-card-foreground' />
                                                    <Star className='text-card-foreground' />
                                                    <Star className='text-card-foreground' />
                                                    <Star className='text-card-foreground' />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </React.Fragment>
                        ))
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
