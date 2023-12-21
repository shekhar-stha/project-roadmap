"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

const formFields = [
    { id: 'email', label: 'Email address', type: 'email', placeholder: 'Enter your email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
];

export default function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <section className="login bg-boxdark-2 flex items-center justify-center">
            <div className="bg-boxdark login-box shadow-xl border-t-4 border-primary rounded-lg flex flex-col justify-center px-8 py-12 min-[440px]:px-20 min-[440px]:w-fit w-full mx-auto my-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image src="/logo.png" alt="logo" width={48} height={48} className="mx-auto h-12 w-auto" />
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto w-full sm:w-96">
                    <form className="space-y-6" action="#" method="POST">
                        {formFields.map((field) => (
                            <div key={field.id}>
                                <div>
                                    <label htmlFor={field.id} className="mb-3 block text-white">
                                        {field.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            id={field.id}
                                            name={field.id}
                                            type={passwordVisible ? 'text' : field.type}
                                            autoComplete={field.id}
                                            placeholder={field.placeholder}
                                            className="w-full rounded-lg border-[1.5px] border-form-strokedark bg-form-input py-3 px-5 font-large outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:focus:border-primary"
                                        />
                                        {field.type === 'password' && (
                                            <button
                                                type="button"
                                                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {passwordVisible
                                                    ? <VisibilityIcon className='text-slate-500' />
                                                    : <VisibilityOffIcon className='text-slate-500' />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Submit Button */}
                        <div>
                            <Link
                            href="/dashboard"
                                type='submit'
                                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Submit
                            </Link>
                        </div>
                    </form>

                    {/* Registration Link */}
                    <p className="mt-10 text-center text-sm text-white">
                        Not registered yet?{' '}
                        <a href="#" className="font-semibold leading-6 text-primary hover:text-indigo-500">
                            Ask your admin for an invite
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
