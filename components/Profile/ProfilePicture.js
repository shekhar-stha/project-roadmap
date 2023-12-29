import { API_URL } from '@/config/config';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ProfilePicture() {
    const user = useAppSelector(state => state?.user?.user)
    const name = user?.fullName;
    const imageUrl = user?.photo
    const [initials, setInitials] = useState()

    console.log(user)
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
    }, [name, user]);
    return (
        <div className={`img-div w-12 h-12 flex items-center justify-center ${imageUrl ? null : "bg-primary rounded-full"}`}>
            {
                user ?
                    imageUrl ?
                        <Image
                            className="rounded-full w-12 h-12 object-cover"
                            src={`${API_URL}/img/${imageUrl}`}
                            alt={user?.fullName}
                            width={100}
                            height={100} />
                        : <span className="text-white text-[1.2rem]">{initials}</span>
                    : null
            }
        </div>
    )
}
