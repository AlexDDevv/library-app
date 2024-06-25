import type { Metadata } from "next";
import "../src/assets/style/globals.css"
import "../src/assets/style/main.css";

export const metadata: Metadata = {
    title: "Library App",
    description: "Je m'appelle Alexis DELPORTE, développeur web passionné par la création web. Aimant particulièrement la lecture, j'ai voulu créer un site permettant de rechercher des livres lus ou à lire, de pouvoir les enregistrer, partager des recommandations de lecture... d'avoir sa propre bibliothèque numérique!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-bgApp max-w-[1440px] mx-auto my-0 py-5">{children}</body>
        </html>
    );
}
