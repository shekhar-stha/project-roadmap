import VideoCard from '@/components/TeamTraining/VideoCard';
import React from 'react';

const mockupData = [
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 1',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 2',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 3',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 4',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 5',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 6',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 7',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 8',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 9',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist/episode',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'English Grammar for Beginners',
    subData: '',
  },
  // Add more mockup data as needed
];

export default function page() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className='text-3xl font-medium mb-6 text-black dark:text-white'>
         Nifty Essential Training for Absolute Beginners
         </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {mockupData.map((video, index) => (
          <VideoCard
            key={index}
            href={video.href}
            thumbnailSrc={video.thumbnailSrc}
            title={video.title}
            playlistSize={video.playlistSize}
            subData={video.subData}
          />
        ))}
      </div>
    </div>
  </div>
  )
}
