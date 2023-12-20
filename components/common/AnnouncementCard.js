import Image from 'next/image'
import React from 'react'


export default function AnnouncementCard({ title, content, author, date, imageUrl, className }) {

    return (
        <div className={`w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark ${className}`}>
            <h4 className='text-[1.7rem] font-medium mb-3 dark:text-secondary text-primary'>{title}</h4>
            <p className='dark:text-bodydark1 mb-4'>{content}</p>
            <div className='flex items-center'>
                <Image width={60} height={60} className='w-11 h-11 rounded-full mr-4' src={imageUrl} alt={`Avatar of ${author}`} />
                <div className='text-sm'>
                    <p className='dark:text-white text-base font-medium mb-1 leading-none'>{author}</p>
                    <p className='dark:text-bodydark1'>{date}</p>
                </div>
            </div>
        </div>
    )
};