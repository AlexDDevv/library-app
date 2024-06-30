import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt"
import * as z from "zod"

const userSchema = z
    .object({
        email: z.string().min(1, "Une adresse email est recquise").email("Email invalide"),
        userName: z.string().min(1, "Un nom d'utilisateur est recquis").max(100,),
        password: z.string().min(1, "Un mot de passe est recquis").min(8, "Le mot de passe doit avoir au moins 8 caractères")
    })
 
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, userName, password } = userSchema.parse(body)

        // Check if email already exist

        const existingUserbyEmail = await prisma.user.findUnique({
            where: { email: email }
        })
        if (existingUserbyEmail) {
            return NextResponse.json({ user: null, message: "Un utilisateur avec cet email existe déjà" }, { status: 409 })
        }

        // Check if userName already exist

        const existingUserbyUserName = await prisma.user.findUnique({
            where: { userName: userName }
        })
        if (existingUserbyUserName) {
            return NextResponse.json({ user: null, message: "Un utilisateur avec ce nom d'utilisateur existe déjà" }, { status: 409 })
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                email,
                userName,
                password: hashedPassword
            }
        })
        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: "Compte créé avec succès!" }, { status: 201 })
    } catch(error) {
        return NextResponse.json({ message: "Une erreur est survenue." }, { status: 500 })
    }
}