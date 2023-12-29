'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DynamicProfilePicture from './DynamicProfilePicture';

export default function ProfileCard({ name, role, imageUrl, href, lists, extraTitle, extraDescription, email }) {

    return (
        <>
            <Link href={href}>
                <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
                    <div className='flex flex-wrap gap-x-4 gap-3'>
                        <DynamicProfilePicture size={16} name={name} imageUrl={imageUrl} />
                        <div className='profile-info my-auto'>
                            <h3 className='text-2xl font-medium text-black dark:text-white'>{name}</h3>
                            <p className='text-base text-black dark:text-white capitalize'>{role}</p>
                            <p className='text-base text-black dark:text-white'>{email}</p>
                        </div>
                    </div>

                    {
                        extraTitle && <div className='my-3'>
                            <p className='text-lg font-medium'>
                                <span className='text-primary dark:text-secondary pe-2'>{extraTitle}:</span>
                                <span className='text-black dark:text-white'>{extraDescription}</span>
                            </p>
                        </div>
                    }

                    {lists?.map((list, index) => (
                        <div key={index} className='my-3'>
                            <p className='text-lg font-medium'>
                                <span className='text-primary dark:text-secondary pe-2'>{list.title}:</span>
                                <span className='text-black dark:text-white'>{list.data}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </Link>
        </>
    );
}
