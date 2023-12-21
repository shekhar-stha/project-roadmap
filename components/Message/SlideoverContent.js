// SlideoverContent.js
import React from 'react';
import Image from 'next/image';
import SingleFile from '@/components/common/SingleFile';

export default function SlideoverContent({ endUser, chatMessages }) {
    return (
        <div className='flex flex-col items-center mt-10'>
            <Image src={endUser.imageSrc} width={112} height={112} className='rounded-full' alt='Profile' />
            <h6 className='text-2xl font-medium mt-5 text-black dark:text-white'>{endUser.name}</h6>
            <h6 className='text-base font-medium text-black dark:text-meta-5'>{endUser.role}</h6>

            <div>
                <h6 className='text-xl font-medium mt-6 text-black dark:text-white'>
                    Media
                </h6>
            </div>

            <div className='grid grid-cols-1 2xsm:grid-cols-2 msm:grid-cols-3 gap-4 mt-4'>
                {chatMessages.map((message, index) => (
                    message.files && message.files.length > 0 ? (
                        message.files.map((file, fileIndex) => (
                            <SingleFile key={`file_${index}_${fileIndex}`} file={file} />
                        ))
                    ) : null
                ))}
            </div>
        </div>
    );
}
