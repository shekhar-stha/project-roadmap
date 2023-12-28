import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function DynamicProfilePicture({ name, imageUrl, size, fontSize }) {

    const [initials, setInitials] = useState()

    useEffect(() => {
        if (name !== undefined && name !== null) {
            if (name.length > 0) {
                const words = name.split(' ');
                const letters = words[0].charAt(0) + (words.length > 1 ? words[1]?.charAt(0) : '');
                setInitials(letters.toUpperCase());
            } else {
                setInitials(name.charAt(0));
            }
        }
    }, [name, imageUrl]);

    console.log(imageUrl)
    return (
        <div className={`img-div ${size ? `w-${size} min-w-${size} min-h-${size} h-${size}` : "w-12 h-12"} flex items-center justify-center ${imageUrl ? null : "bg-primary rounded-full"}`}>
            {
                imageUrl ?
                    <Image
                        className={`rounded-full ${size ? `w-${size} min-w-${size} min-h-${size} h-${size}` : "w-12 h-12"} object-cover`}
                        src={`http://localhost:8000/${imageUrl}`}
                        alt={name}
                        width={200}
                        height={200} 
                        />
                    : <span className={`text-white ${fontSize ? `text-[${fontSize}rem]` : `text-[1.4rem]`}`}>{initials}</span>
            }
        </div>
    )
}
