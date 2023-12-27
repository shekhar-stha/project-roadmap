"use client"

import Panel from '@/components/Panel'
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
    const [initials, setInitials] = useState()
    console.log("profile", profile)
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


    // const profile =
    // {
    //     name: 'Rojan Shresha',
    //     role: 'Junior Developer',
    //     href: '/dashboard/developers/detail',
    //     lists: [
    //         { title: 'About Us', data: 'I am Shekhar' },
    //         { title: 'Role', data: 'Senior Developer' },
    //         { title: 'Email', data: 'shekharr.shresthaa@gmail.com' },
    //         { title: 'Working on', data: 'Escobar Landscaping' },
    //         { title: 'Assigned Projects', data: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping' },
    //     ],
    //     profile?.photo: '/shekhar-profile.jpg',
    // }

    useEffect(() => {
        if (profile?.fullName !== undefined && profile?.fullName !== null) {
            const words = profile?.fullName.split(' ');
            // Extract the first character of each word
            if (words.length > 0) {
                const letters = words[0].charAt(0) + (words.length > 1 ? words[1]?.charAt(0) : '');
                setInitials(letters.toUpperCase());
            } else {
                setInitials(profile?.fullName.charAt(0));
            }
        }
    }, [profile]);


    console.log(profile)

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
                    <div className={`img-div w-20 h-20 flex items-center justify-center ${profile?.photo ? null : "bg-primary rounded-full"}`}>
                        {
                            profile?.photo ?
                                <Image className="rounded-full w-20 h-20 object-cover" src={profile?.photo} alt={profile?.fullName} width={200} height={200} />
                                : <span className="text-white text-[1.9rem]">{initials}</span>
                        }
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
