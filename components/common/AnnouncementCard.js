import Image from 'next/image'
import React from 'react'
import DynamicProfilePicture from '../Profile/DynamicProfilePicture'


export default function AnnouncementCard({ title, content, author, date, imageUrl, className }) {
    const formattedDate = new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return (
        <div className={`w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark ${className}`}>
            <h4 className='text-[1.7rem] font-medium mb-3 dark:text-secondary text-primary'>{title}</h4>
            <p className='dark:text-bodydark1 mb-4'>{content}</p>
            <div className='flex gap-x-3 items-center'>
                <DynamicProfilePicture size={16} name={author} imageUrl={imageUrl} />
                <div className='text-sm'>
                    <p className='dark:text-white text-base font-medium mb-1 leading-none'>{author}</p>
                    <p className='dark:text-bodydark1'>{formattedDate}</p>
                </div>
            </div>
        </div>
    )
};