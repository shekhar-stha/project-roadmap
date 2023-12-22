import AnnouncementCard from '@/components/common/AnnouncementCard'
import Link from 'next/link';
import React from 'react'

export default function page() {
    const announcementData = [
        {
            title: 'We got new client',
            content: 'We got new client and we are going to start a new project for them from next week. We are very excited to work with them.',
            author: 'Jeremiah Kingston',
            date: 'Aug 18 at 10:00 AM',
            imageUrl: '/shekhar-profile.jpg',
        },
        {
            title: 'Team Meeting',
            content: 'Let"s have a team meeting on 20th of this month. We will discuss about the new project and the new client.',
            author: 'Jeremiah Kingston',
            date: 'Aug 18 at 10:00 AM',
            imageUrl: '/shekhar-profile.jpg',
        },
    ];
    return (
        <>
            <div className='flex flex-wrap justify-between align-middle mb-4'>
                <h1 className='header'>Announcements</h1>
                <div>
                    <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/announcements/create'>
                        Post Announcement
                    </Link>
                </div>
            </div>

            <div className='w-full'>
                {announcementData.map((announcement, index) => (
                    <AnnouncementCard
                        key={index}
                        title={announcement.title}
                        content={announcement.content}
                        className='my-5'
                        author={announcement.author}
                        date={announcement.date}
                        imageUrl={announcement.imageUrl
                        } />
                ))}
            </div>
        </>
    )
}
