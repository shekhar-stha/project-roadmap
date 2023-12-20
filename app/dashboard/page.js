import CardDataStats from '@/components/common/CardDataStats'
import Link from 'next/link'
import React from 'react'
import WebhookIcon from '@mui/icons-material/Webhook';
import ProjectCard from '@/components/Projects/ProjectCard';
import AnnouncementCard from '@/components/common/AnnouncementCard';
import Tasks from '@/components/Tasks';
import MessageIcon from '@mui/icons-material/Message';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CampaignIcon from '@mui/icons-material/Campaign';

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
      <h2 className="header">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Current Projects" total="8">
          <WebhookIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Messages" total="12">
          <MessageIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Tasks" total="45">
          <PlaylistAddIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Announcements" total="9">
          <CampaignIcon className='fill-primary dark:fill-white' />
        </CardDataStats>
      </div>

      <div className='my-9'>
        <h2 className="header">Current Projects</h2>
        <div className="two-col-grid">
          <ProjectCard />

          <ProjectCard />
        </div>
      </div>

      <div className='my-9'>
        <Tasks />
      </div>

      <div className='my-9'>
        <h4 className='header'>Announcements</h4>
        <div className="two-col-grid"></div>
        {announcementData.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            title={announcement.title}
            content={announcement.content}
            className='mb-5'
            author={announcement.author}
            date={announcement.date}
            imageUrl={announcement.imageUrl
            } />
        ))}
      </div>
    </>

  )
}
