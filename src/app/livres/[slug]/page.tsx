"use client"
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { Star } from "lucide-react"
import Image from 'next/image'
import parfaite from "../../../assets/img/parfaite.png"
import SelectBookState from '@/components/ui/SelectBookState'
import Footer from '@/components/Footer'


export default function page({ params }: { params: { slug: string } }) {
    const [bookDetails, setBookDetails] = useState([]);
    const [bookDetails2, setBookDetails2] = useState([]);
    const [error, setError] = useState("");
    const { slug } = params;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const res = await fetch(`https://openlibrary.org/isbn/${slug}.json`);
                if (!res.ok) {
                    throw new Error("Erreur lors de la récupération des détails du livre");
                }
                const data = await res.json();
                setBookDetails(data);
                // console.log(data);
            } catch (error) {
                setError("Erreur lors de la récupération des détails du livre.");
                console.error(error);
            }

            try {
                const res2 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${slug}&key=${apiKey}`);
                if (!res2.ok) {
                    throw new Error("Erreur lors de la récupération des détails du livre");
                }
                const data2 = await res2.json();
                setBookDetails2(data2.items[0]);
                // console.log(data2.items[0]);
            } catch (error) {
                setError("Erreur lors de la récupération des détails du livre.");
                console.error(error);
            }
        };
        fetchBookDetails();
    }, [slug, apiKey]);

    console.log(bookDetails);
    console.log(bookDetails2);

    const authorKey = bookDetails.authors && bookDetails.authors.length > 0 ? bookDetails.authors[0].key : null;
    const authorSplit = authorKey ? authorKey.split('/').pop() : null;
    const authorUrlImg = `https://covers.openlibrary.org/a/olid/${authorSplit}-S.jpg`

    return (
        <>
            <Header />
            <main className='mb-36'>
                <section className='max-w-[1440px] mx-auto flex flex-col gap-y-24 mb-36'>
                    <div className='h-[500px] flex items-center justify-start gap-x-12'>
                        <div className='w-[320px] h-full'>
                            {bookDetails.covers ? (
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${bookDetails.covers}-L.jpg`}
                                    alt={`Image de couverture du livre ${bookDetails.title}`}
                                    className='w-full h-full rounded-xl'
                                />
                            ) : (
                                <img
                                    src={bookDetails2.volumeInfo?.imageLinks.thumbnail}
                                    alt={`Image de couverture du livre ${bookDetails.title}`}
                                    className='w-full h-full rounded-xl'
                                />
                            )}
                        </div>
                        <div className='flex flex-col justify-between h-full gap-5'>
                            <div>
                                <h1 className='font-titleFont font-bold text-foreground text-5xl mb-4'>{bookDetails.title}</h1>
                                <h2 className='font-titleFont font-semibold text-foreground text-xl italic'>{bookDetails2.volumeInfo?.authors}</h2>
                            </div>
                            {bookDetails2.volumeInfo?.description ? (
                                <>
                                    {bookDetails2.volumeInfo?.description.length > 200 ? (
                                        <p className='max-w-[650px] font-bodyFont text-foreground text-lg'>
                                            {bookDetails2.volumeInfo?.description.substring(0, 200)}...
                                            <a href="#description" className='font-bodyFont font-bold text-destructive-foreground text-lg ml-2'>Lire la suite</a>
                                        </p>
                                    ) : (
                                        <p className='max-w-[650px] font-bodyFont text-foreground text-lg'>
                                            {bookDetails2.volumeInfo?.description}</p>
                                    )}
                                </>
                            ) : (
                                <p className='font-bodyFont text-foreground text-lg'>Description du livre indisponible...</p>
                            )}
                            <div>
                                <div className='flex gap-x-2 mb-1'>
                                    <Star className='text-foreground cursor-pointer'></Star>
                                    <Star className='text-foreground cursor-pointer'></Star>
                                    <Star className='text-foreground cursor-pointer'></Star>
                                    <Star className='text-foreground cursor-pointer'></Star>
                                    <Star className='text-foreground cursor-pointer'></Star>
                                </div>
                                <p className='font-bodyFont font-medium text-foreground text-sm'>Nombre de notes</p>
                            </div>
                            {bookDetails2.saleInfo?.isEbook === false ? (
                                <p className='font-bodyFont font-semibold text-foreground text-lg'>Indisponible en Ebook</p>
                            ) : (
                                <p className='font-bodyFont font-semibold text-foreground text-lg'>Disponible en Ebook</p>
                            )}
                            <div className='flex items-center gap-x-3'>
                                <div className='w-14 h-14 rounded-full border-2 border-border'>
                                    <img
                                        src={authorUrlImg}
                                        alt={`Image de ${bookDetails2.volumeInfo?.authors} auteur du livre ${bookDetails.title}`}
                                        className='h-full w-full rounded-full'
                                    />
                                </div>
                                <h3 className='font-titleFont font-medium text-foreground'>{bookDetails2.volumeInfo?.authors}</h3>
                            </div>
                            <SelectBookState />
                        </div>
                    </div>
                    <div className='flex justify-between gap-x-24'>
                        <div id='description' className='max-w-[568px]'>
                            <h4 className='font-titleFont font-bold text-foreground text-4xl mb-9'>Résumé :</h4>
                            {bookDetails2.volumeInfo?.description ? (
                                <p className='font-bodyFont text-lg text-secondary-foreground'>{bookDetails2.volumeInfo?.description}</p>
                            ) : (
                                <p className='font-bodyFont text-secondary-foreground text-lg'>Description du livre indisponible...</p>
                            )}
                        </div>
                        <div className=''>
                            <h4 className='font-titleFont font-bold text-foreground text-4xl mb-9'>Informations complémentaires :</h4>
                            <ul className='font-bodyFont font-medium text-secondary-foreground text-lg flex flex-col gap-y-5'>
                                <li>Éditeur : <span className='font-normal ml-1'>{bookDetails.publishers}</span></li>
                                <li>Date de publication : <span className='font-normal ml-1'>{bookDetails.publish_date}</span></li>
                                <li>Langue : <span className='font-normal ml-1'>{bookDetails.publish_country}</span></li>
                                <li>Nombre de pages : <span className='font-normal'>{bookDetails.number_of_pages}</span></li>
                                {/* <li>Format : <span className='font-normal ml-1'>Broché</span></li> */}
                                {bookDetails2.volumeInfo?.categories ? (
                                    <li>Genre : <span className='font-normal ml-1'>{bookDetails2.volumeInfo?.categories}</span></li>
                                ) : (
                                    <li>Genre : <span className='font-normal ml-1'>Genre indisponible</span></li>
                                )}
                                {/* <li>Poids : <span className='font-normal ml-1'>755g</span></li>
                            <li>Dimensions : <span className='font-normal ml-1'>24 x 15.4 x 3.9 cm</span></li> */}
                                <li>ISBN-10 : <span className='font-normal ml-1'>{bookDetails.isbn_10}</span></li>
                                <li>ISBN-13 : <span className='font-normal ml-1'>{bookDetails.isbn_13}</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='bg-muted px-16 py-12'>
                    <div className='mb-24'>
                        <div className='bg-card py-5 pl-7 rounded-md flex items-center gap-x-7 mb-12'>
                            <h5 className='font-titleFont font-semibold text-card-foreground uppercase tracking-[2px]'>Critiques, analyses et avis</h5>
                            <span className='font-bodyFont font-medium text-card-foreground italic cursor-pointer'>Voir plus</span>
                        </div>
                        <div>
                            <p className='font-bodyFont text-muted-foreground'>Rien n'a encore été écrit sur ce livre.</p>
                        </div>
                    </div>
                    <div className='mb-24'>
                        <div className='bg-card py-5 pl-7 rounded-md flex items-center gap-x-7 mb-12'>
                            <h5 className='font-titleFont font-semibold text-card-foreground uppercase tracking-[2px]'>Du même auteur</h5>
                            <span className='font-bodyFont font-medium text-card-foreground italic cursor-pointer'>Voir plus</span>
                        </div>
                        <div>
                            <div>
                                <div className='w-36 h-56 mb-1'>
                                    <Image
                                        src={parfaite}
                                        alt={`Un autre livre de ${bookDetails2.volumeInfo?.authors}, intitulé La parfaite lumière`}
                                        className='w-full h-full rounded-[4px]'
                                    />
                                </div>
                                <p className='font-bodyFont font-bold text-muted-foreground'>La parfaite lumière</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-24'>
                        <div className='bg-card py-5 pl-7 rounded-md flex items-center gap-x-7 mb-12'>
                            <h5 className='font-titleFont font-semibold text-card-foreground uppercase tracking-[2px]'>Que lire après {bookDetails.title}</h5>
                            <span className='font-bodyFont font-medium text-card-foreground italic cursor-pointer'>Voir plus</span>
                        </div>
                        <div>
                            <div>
                                <div className='w-36 h-56 mb-1'>
                                    <Image
                                        src={parfaite}
                                        alt={`Un autre livre de ${bookDetails2.volumeInfo?.authors}, intitulé La parfaite lumière`}
                                        className='w-full h-full rounded-[4px]'
                                    />
                                </div>
                                <p className='font-bodyFont font-bold text-muted-foreground'>La parfaite lumière</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
