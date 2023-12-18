// Comment.js
import Image from 'next/image';
import React from 'react';
import FileShowcase from './FileShowcase';

export default function Comment({ userName, date, text, imageUrl, files }) {
console.log("files from comment",files)
    return (
        <div className='comment w-full flex gap-x-4 my-3'>
            <div>
                <Image src={imageUrl} alt={userName} width={60} height={60} className='shadow rounded-full min-w-[60px] min-h-[60px]' />
            </div>
            <div className='comment-info w-full'>
                <div className='flex msm:flex-row flex-col gap-y-1 msm:gap-y-0 msm:gap-x-5'>
                    <p className='user-name font-semibold dark:text-white'>{userName}</p>
                    <p className='comment-date'>{date}</p>
                </div>
                <p className='dark:text-white mt-2'>{text}</p>

                <FileShowcase uploadedFiles={files} />
            </div>
        </div>
    )
};

