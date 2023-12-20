"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';


export default function Page() {
    const roles = [
        { value: '', label: 'Role' },
        { value: 'Intern', label: 'Intern' },
        { value: 'Junior Developer', label: 'Junior Developer' },
        { value: 'Mid Level Developer', label: 'Mid Level Developer' },
        { value: 'Senior Developer', label: 'Senior Developer' },

    ];

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        role: '',
        bio: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success('Added Successfully', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
        console.log(formValues);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="text-3xl font-medium text-black dark:text-white">Add Developer</h3>
                    </div>
                    <div className="p-6.5">
                        <FormField
                            label="Developer Name"
                            type="text"
                            placeholder="Enter Developer Name"
                            value={formValues.name}
                            onChange={(value) => setFormValues({ ...formValues, name: value })}
                        />

                        <FormField
                            label="Email"
                            type="text"
                            placeholder="Enter Email"
                            value={formValues.email}
                            onChange={(value) => setFormValues({ ...formValues, name: value })}
                        />

                        <FormField
                            label="Role"
                            type="select"
                            selectOptions={roles}
                            value={formValues.role}
                            onChange={(value) => setFormValues({ ...formValues, role: value })}
                        />

                        <FormField
                            label="Bio"
                            type="textarea"
                            placeholder="Enter bio here"
                            value={formValues.bio}
                            onChange={(value) => setFormValues({ ...formValues, bio: value })}
                        />
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
