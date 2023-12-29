"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { API_URL } from '@/config/config';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { addDeveloper } from '@/redux/slices/developersSlice';

export default function Page() {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!passwordVisible);
    };
    const [formValues, setFormValues] = useState({
        fullName: '',
        username: '',
        email: '',
        userType: 'developer',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['fullName', 'username', 'email', 'password', 'confirmPassword'];
        const errors = {};

        requiredFields.forEach((field) => {
            if (!formValues[field]) {
                errors[field] = `Fill this ${field}`;
            }
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            toast.error('Please fill in all required fields.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/user/addUser`, formValues);
            if (response?.data?.status) {
                console.log("respone", response?.data)
                toast.success(`Successfully Added ${formValues?.fullName}`, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
                dispatch(addDeveloper(response?.data?.data))
                router.push('/dashboard/developers')
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.msg, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        }
        console.log(formValues);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ToastContainer />
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="text-3xl font-medium text-black dark:text-white">Add Developer</h3>
                    </div>
                    <div className="p-6.5">
                        <FormField
                            label="Developer Name"
                            type="text"
                            placeholder="Enter Developer Name"
                            value={formValues.fullName}
                            onChange={(value) => setFormValues({ ...formValues, fullName: value })}
                            error={formErrors.fullName}
                        />

                        <FormField
                            label="Username"
                            type="text"
                            placeholder="Enter username here"
                            value={formValues.username}
                            onChange={(value) => setFormValues({ ...formValues, username: value })}
                            error={formErrors.username}
                        />

                        <FormField
                            label="Email"
                            type="text"
                            placeholder="Enter Email"
                            value={formValues.email}
                            onChange={(value) => setFormValues({ ...formValues, email: value })}
                            error={formErrors.email}
                        />

                        <div className='relative'>
                            <FormField
                                label="Password"
                                type={`${passwordVisible ? 'text' : 'password'}`}
                                placeholder="Enter Password"
                                value={formValues.password}
                                onChange={(value) => setFormValues({ ...formValues, password: value })}
                                error={formErrors.password}
                            />
                            <button
                                type="button"
                                className="absolute top-11 right-4"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible
                                    ? <VisibilityIcon className='text-slate-500' />
                                    : <VisibilityOffIcon className='text-slate-500' />}
                            </button>
                        </div>

                        <div className='relative'>
                            <FormField
                                label="Confirm Password"
                                type={`${confirmPasswordVisible ? 'text' : 'password'}`}
                                placeholder="Enter Confirm Password"
                                value={formValues.confirmPassword}
                                onChange={(value) => setFormValues({ ...formValues, confirmPassword: value })}
                                error={formErrors.confirmPassword}
                            />
                            <button
                                type="button"
                                className="absolute top-11 right-4"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {passwordVisible
                                    ? <VisibilityIcon className='dark:text-slate-500 ' />
                                    : <VisibilityOffIcon className='dark:text-slate-500' />}
                            </button>
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                        Add Developer
                    </button>
                </div>


            </form>
        </>
    );
}
