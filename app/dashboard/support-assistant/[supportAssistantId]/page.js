"use client"
import Panel from '@/components/Panel'
import DynamicProfilePicture from '@/components/Profile/DynamicProfilePicture'
import ProfileCard from '@/components/Profile/ProfileCard'
import PointAnswers from '@/components/common/PointAnswers'
import { API_URL } from '@/config/config'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function SupportAssistant({ params }) {
    const { supportAssistantId } = params
    const [profile, setProfile] = useState()

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        const apiEndpoint = `${API_URL}/user/getUser/${supportAssistantId}`;

        try {
            const response = await axios.get(`${apiEndpoint}`);
            if (response?.data?.status) {
                console.log("respone", response?.data?.data)
                setProfile(response?.data?.data);
                console.log("profile", profile)
            } else {
                console.error('Error');
            }
        } catch (error) {
            toast.error(error?.response?.data?.msg, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            console.error('Error fetching profiles:', error);
        }
    }

    // const { supportAssistantId } = params
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchSupportAssistants());
    // }, [dispatch]);

    // const profiles = useAppSelector((state) => state.supportAssistants.profiles);
    // const profile = profiles.find((profile) => profile.id === supportAssistantId);

    // console.log("profiles", profiles)
    // console.log("profile", profile)

    const completedProjects = [
        {
            name: 'Escobar Landscaping',
            type: 'Landscaping',
            githubLink: 'https://github.com',
            vercelLink: 'https://vercel.com',
            niftyLink: 'https://nifty.com',
            link: '/dashboard/projects/view',
        },
        {
            name: 'Escobar Landscaping',
            type: 'Landscaping',
            githubLink: 'https://github.com',
            vercelLink: 'https://vercel.com',
            niftyLink: 'https://nifty.com',
            link: '/dashboard/projects/view',
        },
    ]
    return (
        <>
            <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
                <ToastContainer />
                <div className='flex gap-x-4 mb-5'>
                    <div>
                        <DynamicProfilePicture size={24} name={profile?.fullName} imageUrl={profile?.photo} />
                    </div>
                    <div className='profile-info my-auto'>
                        <h3 className='text-2xl font-medium text-black dark:text-white'>{profile?.fullName}</h3>
                        <p className='text-base text-black dark:text-white'>{profile?.userType}</p>
                    </div>
                </div>

                <div>
                    <p className='text-lg mb-2'>
                        <span className='text-primary dark:text-secondary font-medium pe-2'>Email:</span>
                        <span className='text-black dark:text-white '>{profile?.email}</span>
                    </p>

                    <p className='text-lg'>
                        <span className='text-primary dark:text-secondary font-medium pe-2'>Username:</span>
                        <span className='text-black dark:text-white font-normal'>{profile?.username}</span>
                    </p>
                </div>
            </div>
            <h3 className='header mt-9 ps-4'>Reviewed Projects</h3>
            {
                completedProjects.map((project, index) => (
                    <Panel key={index} className='my-6'>
                        <h2 className='header'>{project?.name}</h2>
                        <PointAnswers className='mb-2' title='Project Type:' data={project?.type} />
                        <PointAnswers className='mb-2' title='Github Link:' data={project?.githubLink} />
                        <PointAnswers className='mb-2' title='Vercel Link:' data={project?.vercelLink} />
                        <PointAnswers className='mb-8' title='Nifty Link:' data={project?.niftyLink} />
                        <Link
                            className="rounded bg-primary py-2 px-5 font-large text-base text-gray"
                            href={project?.link}>
                            View Detail
                        </Link>
                    </Panel>
                ))
            }
        </>
    )
}
