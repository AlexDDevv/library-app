"use client";
import React from "react";
import SignInForm from "@/components/form/SignInForm";
import { useRouter } from "next/navigation";

export default function Connexion() {
    const router = useRouter();

    const registerPage = () => {
        router.push("/inscription");
    };

    return (
        <section className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-titleFont text-foreground font-bold mb-10">
                Connexion
            </h1>
            <SignInForm registerPage={registerPage} />
        </section>
    );
}
