"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';


export default function Page() {

    const [formValues, setFormValues] = useState({
        topic: '',
        description: '',
        time: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success('Project Added Successfully', {
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
                        <h3 className="text-3xl font-medium text-black dark:text-white">Post Announcement</h3>
                    </div>
                    <div className="p-6.5">
                        <FormField
                            label="Announcement Topic"
                            type="text"
                            placeholder="Enter Announcement Topic"
                            value={formValues.topic}
                            onChange={(value) => setFormValues({ ...formValues, topic: value })}
                        />

                        <FormField
                            label="Announcement Description"
                            type="textarea"
                            placeholder="Enter Announcement Description"
                            value={formValues.description}
                            onChange={(value) => setFormValues({ ...formValues, description: value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                        Post Announcement
                    </button>
                </div>


            </form>
        </>
    );
}
