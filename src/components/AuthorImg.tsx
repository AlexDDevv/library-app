import React, { useState, useEffect } from "react";
import { BookUser } from "lucide-react";

type AuthorImgProps = {
    authorUrlImg?: string;
    authorName?: string;
    bookTitle?: string;
};

const AuthorImg = ({ authorUrlImg, authorName, bookTitle }: AuthorImgProps) => {
    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {
        const checkImageExists = async () => {
            try {
                if (!authorUrlImg) {
                    setImageExists(false);
                    return;
                }

                const response = await fetch(authorUrlImg);
                const blob = await response.blob();
                setImageExists(blob.size > 100);
            } catch {
                setImageExists(false);
            }
        };

        if (authorUrlImg) {
            checkImageExists();
        }
    }, [authorUrlImg]);

    return (
        <div className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center">
            {imageExists ? (
                <img
                    src={authorUrlImg}
                    alt={`Image de ${authorName} auteur du livre ${bookTitle}`}
                    className="h-full w-full rounded-full object-cover"
                />
            ) : (
                <BookUser className="w-5 h-5 text-muted-foreground" />
            )}
        </div>
    );
};

export default AuthorImg;
