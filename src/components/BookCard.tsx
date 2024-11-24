import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export type BookCardProps = {
    title: string;
    isbn: string[];
    cover_i: string;
    author_name: string;
};

export default function BookCard({
    title,
    isbn,
    cover_i,
    author_name,
}: BookCardProps) {
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    return (
        <div className="bg-card w-[300px] mx-auto rounded-xl border border-border transition-all duration-200 ease-in-outout hover:scale-[1.02] shadow-[0_10px_15px_-3px_rgba(43,42,41,0.5)] hover:shadow-[0_10px_15px_-3px_rgba(43,42,41)]">
            <Link
                href={`/livres/${generateSlug(title)}`}
                onClick={() =>
                    sessionStorage.setItem("currentBookIsbn", isbn[0])
                }
                className="flex flex-col items-center justify-between text-center gap-5 p-6 h-full"
            >
                <div className="w-[180px] h-[280px]">
                    <img
                        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                        alt={`Image de couverture du livre ${title}`}
                        className="rounded-md w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="mb-6">
                        <h2 className="font-titleFont font-bold text-lg text-card-foreground mb-2.5">
                            {title}
                        </h2>
                        <h3 className="font-titleFont font-medium text-card-foreground">
                            {author_name}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2.5">
                        <Star className="text-card-foreground" />
                        <Star className="text-card-foreground" />
                        <Star className="text-card-foreground" />
                        <Star className="text-card-foreground" />
                        <Star className="text-card-foreground" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
