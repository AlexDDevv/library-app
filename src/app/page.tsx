'use client'
import Header from "../components/Header";
import ShinyButton from "@/components/ui/ShinyButton";
import banner from "../assets/img/banner.webp"
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const RegisterBtn = () => {
        router.push("/inscription")
    }

    return (
        <main>
            <Header />
            <section className="text-center w-[80%] mx-auto mb-[100px] mt-0">
                <div className="flex flex-col items-center justify-center gap-5 mb-[100px]">
                    <h1 className="font-titleFont text-accent-foreground font-bold text-7xl flex flex-col gap-5">Reprends goût <span className="bg-custom">à la lecture</span></h1>
                    <p className="font-bodyFont text-accent-foreground text-lg max-w-[750px] mx-auto my-0">Replongez dans l'univers captivant des livres et redécouvrez le plaisir de la lecture. Améliorez votre concentration, stimulez votre imagination, améliorez votre sommeil et réduisez votre stress quotidien en vous immergeant dans des histoires passionnantes!</p>
                    <ShinyButton 
                        text="S'inscrire"
                        registerBtn={RegisterBtn}
                    />
                </div>
                <div className="w-full mx-auto my-0">
                    <Image
                        src={banner}
                        alt="Une femme lisant un livre confortablement installée dans un fauteuil"
                        className="rounded-xl"
                    />
                </div>
            </section>
            <section className="text-center w-[80%] mx-auto mt-0 mb-[100px]">
                <article className="mb-8">
                    <h2 className="font-quoteFont text-3xl text-foreground max-w-[630px] leading-10 mx-auto mt-0 mb-2">
                        <q>La lecture est un voyage de l'esprit, une agréable absence de la vie et de soi-même.</q>
                    </h2>
                    <span className="font-bodyFont text-lg text-secondary-foreground italic">Antoine Albalat</span>
                </article>
                <p className="font-bodyFont text-accent-foreground max-w-[750px] mx-auto my-0">Ne pas voir le temps passer quand nous sommes plongés dans un livre, celui qui nous instruit, nous fait rêver ou nous fait voyager. De belles émotions peuvent être transmises par la lecture, celle la même qui nourrit notre imaginaire, et celui des enfants.</p>
            </section>
            <Footer />
        </main>
    );
}
