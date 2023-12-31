"use client"

import Panel from '@/components/Panel'
import DynamicProfilePicture from '@/components/Profile/DynamicProfilePicture'
import ProfileCard from '@/components/Profile/ProfileCard'
import PointAnswers from '@/components/common/PointAnswers'
import { API_URL } from '@/config/config'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function DeveloperDetails({ params }) {
    const { developerId } = params
    const [profile, setProfile] = useState({})

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        const apiEndpoint = `${API_URL}/user/getUser/${developerId}`;

        try {
            const response = await axios.get(`${apiEndpoint}`);
            if (response?.data?.status) {
                console.log("respone", response?.data?.data)
                setProfile(response?.data?.data);
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



    console.log("Profile",profile)

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
                <div className='flex flex-wrap gap-x-4 gap-3 mb-5'>
                    <DynamicProfilePicture size={24} name={profile?.fullName} imageUrl={profile?.photo} />
                    <div className='profile-info my-auto'>
                        <h3 className='text-2xl font-medium text-black dark:text-white'>{profile?.fullName}</h3>
                        <p className='text-base text-black dark:text-white'>{profile?.userType}</p>
                    </div>
                </div>

                <div>
                    <p className='text-lg mb-2'>
                        <span className='text-primary dark:text-secondary font-medium pe-2'>Email:</span>
                        <span className='text-black dark:text-white break-words'>{profile?.email}</span>
                    </p>

                    <p className='text-lg'>
                        <span className='text-primary dark:text-secondary font-medium pe-2'>Username:</span>
                        <span className='text-black dark:text-white font-normal'>{profile?.username}</span>
                    </p>
                </div>
            </div>
            <h3 className='header mt-9 ps-4'>Completed Projects</h3>
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
