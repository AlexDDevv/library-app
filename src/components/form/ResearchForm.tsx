import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from "lucide-react"

export default function ResearchForm() {
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])
    const [submitForm, setSubmitForm] = useState(false);
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search.trim() !== "") {
            setSubmitForm(true);
        }
    };

    useEffect(() => {
        if (submitForm) {
            const searchBooks = async () => {
                try {
                    const res = await fetch(`https://openlibrary.org/search.json?q=${search}`);
                    if (!res.ok) {
                        throw new Error("Erreur lors de la recherche de livres");
                    }
                    const data = await res.json();
                    setBookData(data);
                    console.log(data);
                    router.push(`/livres?query=${encodeURIComponent(search)}`)
                } catch (error) {
                    console.error("Erreur lors de la recherche de livres :", error);
                }
            };

            searchBooks();
        }
    }, [submitForm, search, router]);

    return (
        <form className='flex items-center gap-[10px]' onSubmit={handleSubmit}>
            <label htmlFor="search">
                <Search className='text-card-foreground w-[22px] h-[22px]' />
            </label>
            <input
                type="text"
                name="search"
                id="search"
                placeholder='Recherche un livre...'
                className='bg-transparent text-card-foreground font-bodyFont outline-none border-b border-card-foreground pb-1 placeholder:text-card-foreground/80 placeholder:text-sm placeholder:font-bodyFont'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </form>
    )
}
