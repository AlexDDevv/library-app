'use client'
import Header from "../src/components/Header";
import banner from "../src/assets/img/banner.webp"
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Header />
            <section className="text-center">
                <div className="flex flex-col gap-5 mb-[100px]">
                    <h1 className="font-titleFont text-title font-bold text-7xl flex flex-col gap-5">Reprends goût <span>à la <strong className="font-bold">lecture</strong></span></h1>
                    <p className="font-bodyFont text-text max-w-[700px] mx-auto my-0">Ne pas voir le temps passer quand nous sommes plongés dans un livre, celui qui nous instruit, nous fait rêver ou nous fait voyager. De belles émotions peuvent être transmises par la lecture, celle la même qui nourrit notre imaginaire, et celui des enfants.</p>
                    <button className='bg-bgBtn py-2 px-4 text-white/95 font-semibold rounded-md cursor-pointer max-w-[100px] my-0 mx-auto'>S'inscrire</button>
                </div>
                <div className="w-[65%] mx-auto my-0">
                    <Image
                        src={banner}
                        alt="Une femme lisant un livre confortablement installée dans un fauteuil"
                        className="rounded-xl"
                    />
                </div>
            </section>
        </main>
    );
}
