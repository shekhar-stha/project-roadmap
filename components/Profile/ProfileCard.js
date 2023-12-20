'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ProfileCard({ name, role, imageUrl, href, lists, mailBtn, mail }) {


    return (
        <Link href={href}>
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

                {lists?.map((list, index) => (
                    <div key={index} className='my-3'>
                        <p className='text-lg font-medium'>
                            <span className='text-primary dark:text-secondary pe-2'>{list.title}:</span>
                            <span className='text-black dark:text-white'>{list.data}</span>
                        </p>
                    </div>
                ))}

                {mailBtn && (
                    <div className='mt-7'>
                        <Link href="/messages/detail" className='px-6 rounded bg-primary p-3 font-medium text-gray'>
                            Send Message
                        </Link>
                    </div>
                )}

              
            </div>
        </Link>
    );
}
