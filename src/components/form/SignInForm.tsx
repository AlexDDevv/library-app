import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image'
import googleIcon from "../../assets/img/googleIcon.png"
import { signIn } from 'next-auth/react';

interface SignInFormProps {
    registerPage: () => void;
}

const formSchema = z
    .object({
        email: z.string().min(1, "Une adresse email est recquise").email("Email invalide"),
        password: z.string().min(1, "Un mot de passe est recquis").min(8, "Le mot de passe doit avoir au moins 8 caractères")
    })

type FormFields = z.infer<typeof formSchema>

export default function SignInForm({ registerPage }: SignInFormProps) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(formSchema) })
    const router = useRouter()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const signInData = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if (signInData?.error) {
            console.log(signInData.error);
        } else {
            router.push("/")
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-card text-card-foreground p-8 rounded-lg w-[35%] min-w-[450px] mb-5'>
                <div className='mb-5'>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="email" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1'>Adresse email</label>
                        <input {...register("email")}
                            type="text" 
                            id='email' 
                            name='email' 
                            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' 
                        />
                        {errors.email && (
                            <div className='text-destructive'>{errors.email.message}</div>
                        )}
                    </div>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="password" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1'>Mot de passe</label>
                        <input {...register("password")}
                            type="password" 
                            id='password' 
                            name='password' 
                            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' 
                        />
                        {errors.password && (
                            <div className='text-destructive'>{errors.password.message}</div>
                        )}
                    </div>
                </div>
                <div className='text-center mb-[30px]'>
                    <p className='text-sm font-medium'>Mot de passe oublié?</p>
                </div>
                <button className='w-full bg-primary text-primary-foreground font-bodyFont text-sm font-semibold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 mb-10' disabled={isSubmitting} type='submit'>{isSubmitting ? "Connexion..." : "Se connecter"}</button>
                <div className="relative mb-5">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                    </div>
                </div>
                <button className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full">
                    <Image
                        src={googleIcon}
                        alt='Icon de Google'
                        className='h-[16px] w-[16px] mr-2'
                    />
                    Google
                </button>
            </form>
            <p className='text-muted-foreground'>Tu n'as pas encore de compte? <span className='text-primary font-medium cursor-pointer transition-colors hover:text-primary/90' onClick={registerPage}>Inscris toi!</span></p>
        </>
    )
}
