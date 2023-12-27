"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import "dotenv/config";
import { API_URL } from '@/config/config';
import { useAppDispatch } from '@/redux/hooks';
import { loginError, loginStart, loginSuccess } from '@/redux/slices/userAuth';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const formFields = [
    { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter your username' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
];

export default function Page() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart)
        console.log(formData)

        try {
            const response = await axios.post(`${API_URL}/user/login`, formData);
            if (response?.data?.status) {
                console.log("respone", response?.data)
                localStorage.setItem('loginDetails', JSON.stringify(response?.data));
                const loginDetails = JSON.parse(localStorage.getItem('loginDetails')) ? JSON.parse(localStorage.getItem('loginDetails')) : null;
                dispatch(loginSuccess(loginDetails))
                router.push('/dashboard')
            } else {
                console.error('Error');
                dispatch(loginError("Error"))
            }
        } catch (error) {
            console.error('Error:', error);
            dispatch(loginError(error?.response?.data?.msg))
            toast.error(error?.response?.data?.msg, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        }
    };

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <section className="login bg-boxdark-2 flex items-center justify-center">
                    <ToastContainer />
                    <div className="bg-boxdark login-box shadow-xl border-t-4 border-primary rounded-lg flex flex-col justify-center px-8 py-12 min-[440px]:px-20 min-[440px]:w-fit w-full mx-auto my-auto">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <Image src="/logo.png" alt="logo" width={48} height={48} className="mx-auto h-12 w-auto" />
                            <h2 className="mt-5 text-center text-2xl font-bold leading-9 text-white">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto w-full sm:w-96">
                            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                                {formFields.map((field, index) => (
                                    <div key={index}>
                                        <div>
                                            <label htmlFor={field.id} className="mb-3 block text-white">
                                                {field.label}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id={field.id}
                                                    name={field.name}
                                                    type={passwordVisible ? 'text' : field.type}
                                                    autoComplete={field.id}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.id]}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-lg border-[1.5px] py-3 px-5 font-large outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
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
                                    <button
                                        type='submit'
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Submit
                                    </button>
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
            </body>
        </html>
    );
}
