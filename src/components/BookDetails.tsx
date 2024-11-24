import React from "react";
// import Image from "next/image";
import AuthorImg from "./AuthorImg";
import SelectBookState from "@/components/ui/SelectBookState";
import { Star, BookUser } from "lucide-react";

export type OpenLibraryBook = {
    covers?: number[];
    title?: string;
    publishers?: string[];
    publish_country?: string;
    publish_date?: string;
    number_of_pages?: number;
    isbn_10?: string[];
    isbn_13?: string[];
    authors?: { key: string }[];
};

export type GoogleBooksVolume = {
    volumeInfo?: {
        description?: string;
        categories?: string[];
    };
    saleInfo?: {
        isEbook?: boolean;
    };
};

type BookDetailsProps = {
    bookDetails: OpenLibraryBook;
    googleBookDetails: GoogleBooksVolume;
    authorDetails: {
        name?: string;
    };
    authorUrlImg?: string;
};

export default function BookDetails({
    bookDetails,
    googleBookDetails,
    authorDetails,
    authorUrlImg,
}: BookDetailsProps) {
    return (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-y-24 mb-36">
            <div className="h-[500px] flex items-center justify-start gap-x-12">
                <div className="w-[320px] h-full">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${bookDetails.covers}-L.jpg`}
                        alt={`Image de couverture du livre ${bookDetails.title}`}
                        className="w-full h-full rounded-xl"
                    />
                </div>
                <div className="flex flex-col justify-between h-full gap-5">
                    <div>
                        <h1 className="font-titleFont font-bold text-foreground text-5xl mb-4">
                            {bookDetails.title}
                        </h1>
                        <h2 className="font-titleFont font-semibold text-foreground text-xl italic">
                            {authorDetails.name}
                        </h2>
                    </div>
                    {googleBookDetails.volumeInfo?.description ? (
                        <>
                            {googleBookDetails.volumeInfo?.description.length >
                            200 ? (
                                <p className="max-w-[650px] font-bodyFont text-foreground text-lg">
                                    {googleBookDetails.volumeInfo?.description.substring(
                                        0,
                                        200
                                    )}
                                    ...
                                    <a
                                        href="#description"
                                        className="font-bodyFont font-bold text-destructive-foreground text-lg ml-2"
                                    >
                                        Lire la suite
                                    </a>
                                </p>
                            ) : (
                                <p className="max-w-[650px] font-bodyFont text-foreground text-lg">
                                    {googleBookDetails.volumeInfo?.description}
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="font-bodyFont text-foreground text-lg">
                            Description du livre indisponible...
                        </p>
                    )}
                    <div>
                        <div className="flex gap-x-2 mb-1">
                            <Star className="text-foreground cursor-pointer"></Star>
                            <Star className="text-foreground cursor-pointer"></Star>
                            <Star className="text-foreground cursor-pointer"></Star>
                            <Star className="text-foreground cursor-pointer"></Star>
                            <Star className="text-foreground cursor-pointer"></Star>
                        </div>
                        <p className="font-bodyFont font-medium text-foreground text-sm">
                            Nombre de notes
                        </p>
                    </div>
                    {googleBookDetails.saleInfo?.isEbook === false ? (
                        <p className="font-bodyFont font-semibold text-foreground text-lg">
                            Indisponible en Ebook
                        </p>
                    ) : (
                        <p className="font-bodyFont font-semibold text-foreground text-lg">
                            Disponible en Ebook
                        </p>
                    )}
                    <div className="flex items-center gap-x-3">
                        <AuthorImg
                            authorUrlImg={authorUrlImg}
                            authorName={authorDetails.name}
                            bookTitle={bookDetails.title}
                        />
                        <h3 className="font-titleFont font-medium text-foreground">
                            {authorDetails?.name}
                        </h3>
                    </div>
                    <SelectBookState />
                </div>
            </div>
            <div className="flex justify-between gap-x-24">
                <div id="description" className="max-w-[568px]">
                    <h4 className="font-titleFont font-bold text-foreground text-4xl mb-9">
                        Résumé :
                    </h4>
                    {googleBookDetails.volumeInfo?.description ? (
                        <p className="font-bodyFont text-lg text-secondary-foreground">
                            {googleBookDetails.volumeInfo?.description}
                        </p>
                    ) : (
                        <p className="font-bodyFont text-secondary-foreground text-lg">
                            Description du livre indisponible...
                        </p>
                    )}
                </div>
                <div className="">
                    <h4 className="font-titleFont font-bold text-foreground text-4xl mb-9">
                        Informations complémentaires :
                    </h4>
                    <ul className="font-bodyFont font-medium text-secondary-foreground text-lg flex flex-col gap-y-5">
                        <li>
                            Éditeur :{" "}
                            <span className="font-normal ml-1">
                                {bookDetails.publishers?.[0]}
                            </span>
                        </li>
                        <li>
                            Date de publication :{" "}
                            <span className="font-normal ml-1">
                                {bookDetails.publish_date}
                            </span>
                        </li>
                        <li>
                            Langue :{" "}
                            <span className="font-normal ml-1">
                                {bookDetails.publish_country}
                            </span>
                        </li>
                        <li>
                            Nombre de pages :{" "}
                            <span className="font-normal">
                                {bookDetails.number_of_pages}
                            </span>
                        </li>
                        {googleBookDetails.volumeInfo?.categories ? (
                            <li>
                                Genre :{" "}
                                <span className="font-normal ml-1">
                                    {googleBookDetails.volumeInfo?.categories}
                                </span>
                            </li>
                        ) : (
                            <li>
                                Genre :{" "}
                                <span className="font-normal ml-1">
                                    Genre indisponible
                                </span>
                            </li>
                        )}
                        <li>
                            ISBN-10 :{" "}
                            <span className="font-normal ml-1">
                                {bookDetails.isbn_10?.[0]}
                            </span>
                        </li>
                        <li>
                            ISBN-13 :{" "}
                            <span className="font-normal ml-1">
                                {bookDetails.isbn_13?.[0]}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
