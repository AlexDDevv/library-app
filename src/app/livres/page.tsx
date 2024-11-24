"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import BookCard, { BookCardProps } from "@/components/BookCard";
import Footer from "@/components/Footer";

export default function Search() {
    const [research, setReSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const [submitForm, setSubmitForm] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (research.trim() !== "") {
            setSubmitForm(true);
        }
    };

    const searchLower = research.toLowerCase();

    useEffect(() => {
        if (submitForm) {
            const searchBooks = async () => {
                try {
                    const searchUrl = new URL(
                        "https://openlibrary.org/search.json"
                    );
                    searchUrl.searchParams.append("q", research);
                    searchUrl.searchParams.append("title", research);
                    searchUrl.searchParams.append("has_fulltext", "true");
                    searchUrl.searchParams.append(
                        "fields",
                        "key,title,author_name,cover_i,isbn"
                    );
                    searchUrl.searchParams.append("has_cover", "true");

                    const res = await fetch(searchUrl.toString());
                    if (!res.ok) {
                        throw new Error(
                            "Erreur lors de la recherche de livres"
                        );
                    }
                    const data = await res.json();
                    setBookData(data.docs);
                    console.log(data.docs);
                } catch (error) {
                    console.error(
                        "Erreur lors de la recherche de livres :",
                        error
                    );
                }
            };
            searchBooks();
        }
    }, [submitForm, research]);

    return (
        <>
            <Header />
            <section className="mb-36">
                <h1 className="font-titleFont font-bold text-xl text-foreground tracking-widest text-center uppercase mb-[50px]">
                    Rechercher un livre
                </h1>
                <form
                    className="w-[500px] mx-auto mb-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="research"
                        placeholder="Rechercher des livres..."
                        className="bg-input font-bodyFont text-sm text-accent-foreground pl-[10px] py-2 rounded w-full border border-border placeholder:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={research}
                        onChange={(e) => setReSearch(e.target.value)}
                    />
                </form>
            </section>
            <section className="px-24">
                <div className="w-full grid grid-cols-3 gap-y-24 gap-x-12 mb-36">
                    {bookData.length > 0 &&
                        bookData.map((book: BookCardProps, i) => (
                            <React.Fragment key={i}>
                                {book.isbn &&
                                    book.isbn.length > 0 &&
                                    book.title
                                        .toLowerCase()
                                        .includes(searchLower) && (
                                        <BookCard
                                            title={book.title}
                                            isbn={book.isbn}
                                            cover_i={book.cover_i}
                                            author_name={book.author_name}
                                        />
                                    )}
                            </React.Fragment>
                        ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
