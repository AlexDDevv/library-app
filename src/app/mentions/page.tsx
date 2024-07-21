"use client"
import React from 'react'
import data from "../../data/data.json"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function page() {
    return (
        <>
            <Header />
            <section className='max-w-[1440px] mx-auto mb-[100px]'>
                <h1 className='inline-block font-titleFont font-semibold text-foreground text-3xl border-b border-border pb-2 mb-7'>Mentions légales</h1>
                <div className='pl-5'>
                    {data.mentionsLegales.map((mention, i) => (
                        <div key={i}>
                            <h2 className='font-titleFont font-medium text-2xl text-foreground mb-5'>{mention.title}</h2>
                            <div className='mb-8'>
                                {mention.paragraph.map((text, index) => (
                                    <p className={`font-bodyFont text-accent-foreground max-w-[650px] pl-5 mb-5 last:mb-0 ${mention.title === "Identité de l'éditeur du site" || mention.title === "Hébergeur du site" ? "mb-0" : ""}`} key={index}>
                                        {mention.span[index] && (
                                            <span className='font-bold'>{mention.span[index]}</span>
                                        )}
                                        {text}
                                        {index === 0 && mention.link && (
                                            <a href="#" className='font-bold'>{mention.link}</a>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}
