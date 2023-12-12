import Image from 'next/image';
import React from 'react';

const formFields = [
    { id: 'email', label: 'Email address', type: 'email', placeholder: 'Enter your email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
];

export default function LoginPage() {
    return (
        <section className="login flex items-center justify-center">
            <div className="login-box shadow-xl border-t-4 border-indigo-500 rounded-lg flex flex-col justify-center px-8 py-12 min-[440px]:px-20 min-[440px]:w-fit w-full mx-auto my-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image src="/logo.png" alt="logo" width={48} height={48} className="mx-auto h-12 w-auto" />
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto w-full sm:w-96">
                    <form className="space-y-6" action="#" method="POST">
                        {formFields.map((field) => (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-base font-medium leading-6 text-gray-900">
                                    {field.label}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id={field.id}
                                        name={field.id}
                                        type={field.type}
                                        autoComplete={field.id}
                                        placeholder={field.placeholder}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* Registration Link */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not registered yet?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Ask your admin for an invite
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
