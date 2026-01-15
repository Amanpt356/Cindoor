"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Mail, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { loginAction } from "@/actions/auth-actions";
import { signIn } from "next-auth/react"; // Client side sign in for socials

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        try {
            const result = await loginAction(formData);
            if (result?.error) {
                setError(result.error);
            }
            // If success, NextAuth handles redirect
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const socialLogin = (provider: 'google' | 'apple') => {
        signIn(provider, { callbackUrl: '/shop' });
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                <p className="text-gray-500 mt-2">Sign in to access your account</p>
            </div>

            {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Mail size={18} />
                            </div>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="you@example.com"
                                className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all`}
                            />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <Link href="/forgot-password" className="text-xs text-orange-600 hover:underline">Forgot password?</Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Lock size={18} />
                            </div>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="••••••••"
                                className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all`}
                            />
                        </div>
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : "Sign In"}
                </button>
            </form>

            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button
                        onClick={() => socialLogin('google')}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Google</span>
                    </button>

                    <button
                        onClick={() => socialLogin('apple')}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.98-.52-2.05-.51-3.08 0-1.05.51-1.98.54-3.03-.49-4.04-4.16-4.04-11.08 0-15.11 1.02-1.02 2.76-1.57 4.09-1.55 1.08.02 2.08.43 3.16.43 1.08 0 1.94-.43 3.16-.43 1.09-.02 2.74.52 3.86 2.06-3.35 1.64-2.82 6.56.54 8.01-.81 2.21-1.96 4.34-3.62 6.68zM12.03 2.91c-.05-1.59 1.17-2.91 2.76-2.91.13 1.63-1.63 2.95-2.76 2.91z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Apple</span>
                    </button>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-orange-600 font-bold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
