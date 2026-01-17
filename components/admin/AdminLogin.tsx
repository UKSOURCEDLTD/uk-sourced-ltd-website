'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/invalid-credential') {
                setError('Invalid email or password.');
            } else if (err.code === 'auth/email-already-in-use') {
                setError('Email already in use.');
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters.');
            } else {
                setError('Authentication failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-soft-bg p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl shadow-black/5 w-full max-w-md border border-border-subtle">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-desaturated-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-desaturated-teal" />
                    </div>
                    <h1 className="text-2xl font-semibold text-deep-charcoal">
                        {isRegistering ? 'Create Admin Account' : 'Admin Login'}
                    </h1>
                    <p className="text-sm text-deep-charcoal/60 mt-2">
                        {isRegistering ? 'Set up your secure access' : 'Welcome back to UK Sourced'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-deep-charcoal/60 mb-1.5">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-deep-charcoal/40" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-soft-bg border border-border-subtle rounded-sm text-sm focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal outline-none transition-all"
                                placeholder="name@uksourced.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-deep-charcoal/60 mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-deep-charcoal/40" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-soft-bg border border-border-subtle rounded-sm text-sm focus:ring-1 focus:ring-desaturated-teal focus:border-desaturated-teal outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-deep-charcoal text-white font-bold py-4 rounded-sm uppercase tracking-widest text-xs hover:bg-desaturated-teal transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            isRegistering ? 'Create Account' : 'Sign In'
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => {
                            setIsRegistering(!isRegistering);
                            setError('');
                        }}
                        className="text-xs text-deep-charcoal/50 hover:text-desaturated-teal transition-colors"
                    >
                        {isRegistering ? 'Already have an account? Sign in' : 'Need an account? Create one'}
                    </button>
                </div>
            </div>
        </div>
    );
}
