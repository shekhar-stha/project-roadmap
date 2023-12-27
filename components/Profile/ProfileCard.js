'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ProfileCard({ name, role, imageUrl, href, lists, extraTitle, extraDescription, email }) {
    const [initials, setInitials] = useState()
    useEffect(() => {
        if (name !== undefined && name !== null) {
            const words = name.split(' ');
            // Extract the first character of each word
            if (words.length > 0) {
                const letters = words[0].charAt(0) + (words.length > 1 ? words[1]?.charAt(0) : '');
                setInitials(letters.toUpperCase());
            } else {
                setInitials(name.charAt(0));
            }
        }
    }, [name]);

    return (
        <>
            <Link href={href}>
                <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
                    <div className='flex gap-x-4'>
                        <div className={`img-div w-20 h-20 flex items-center justify-center ${imageUrl ? null : "bg-primary rounded-full"}`}>
                            {
                                imageUrl ?
                                    <Image className="rounded-full w-20 h-20 object-cover" src={imageUrl} alt={name} width={200} height={200} />
                                    : <span className="text-white text-[1.9rem]">{initials}</span>
                            }
                        </div>
                        <div className='profile-info my-auto'>
                            <h3 className='text-2xl font-medium text-black dark:text-white'>{name}</h3>
                            <p className='text-base text-black dark:text-white'>{role}</p>
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
