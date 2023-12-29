"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';
import { addAnnouncement } from '@/redux/slices/announcementSlice';
import axios from 'axios';
import { API_URL } from '@/config/config';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';


export default function Page() {
    const token = localStorage.getItem('loginDetails') ? JSON.parse(localStorage.getItem('loginDetails')).token : null;
    const dispatch = useAppDispatch();
    const router = useRouter();
    
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        time: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.title || !formValues.description) {
            toast.error('Please fill in all required fields.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/announcement/postAnnouncement`, formValues,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response?.data?.status) {
                console.log("respone", response?.data)
                toast.success(`Successfully Posted Announcement `, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
                dispatch(addAnnouncement(response?.data?.data))
                router.push('/dashboard/announcements')
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.msg, {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
        }
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
                            label="Announcement title"
                            type="text"
                            placeholder="Enter Announcement title"
                            value={formValues.title}
                            onChange={(value) => setFormValues({ ...formValues, title: value })}
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
