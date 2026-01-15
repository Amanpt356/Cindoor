"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function registerUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password || !name) {
        return { error: "Missing required fields" };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return { error: "Email already in use" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "USER"
            }
        });

        // Attempt immediate sign in (optional, or just redirect to login)
        // await signIn("credentials", { email, password, redirect: false });

        return { success: "Account created! Please log in." };

    } catch (error) {
        console.error("Registration Error:", error);
        return { error: "Something went wrong." };
    }
}

export async function loginAction(formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials.' };
                default:
                    return { error: 'Something went wrong.' };
            }
        }
        throw error;
    }
}
