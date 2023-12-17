import Image from 'next/image';
import React from 'react';

export default function ProfileCard({ name, role, listOneTitle, listTwoTitle, listOneData, listTwoData, imageUrl }) {
    return (
        <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
            <div className='flex gap-x-4'>
                <div className='img-dv'>
                    <Image className="rounded-full w-20 h-20 object-cover" src={imageUrl} alt={name} width={200} height={200} />
                </div>
                <div className='profile-info my-auto'>
                    <h3 className='text-2xl font-medium text-black dark:text-white'>{name}</h3>
                    <p className='text-base text-black dark:text-white'>{role}</p>
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-lg font-medium text-primary dark:text-secondary'>{listOneTitle} <br /></p>
                <p className='text-black dark:text-white'>
                    {listOneData}
                </p>
            </div>

            {
                listTwoData || listTwoTitle ?
                <div className='mt-4'>
                    <p className='text-lg font-medium text-primary dark:text-secondary'> {listTwoTitle} <br /></p>
                    <p className='text-black dark:text-white'>
                        {listTwoData}
                    </p>
                </div>
                : null
            }
        </div>
    );
}