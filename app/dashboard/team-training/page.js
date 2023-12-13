import VideoCard from '@/components/TeamTraining/VideoCard';
import React from 'react';

const mockupData = [
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training',
    playlistSize: 8,
    subData: 'View full playslist',
  },
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'English Grammar for Beginners',
    playlistSize: 5,
    subData: 'View full playslist',
  },
  // Add more mockup data as needed
];

export default function Page() {
  return (
    <div class="dark:bg-boxdark-2 dark:text-bodydark">
      <h2 className='text-3xl font-medium mb-6 text-black dark:text-white'>Training Materials</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
  );
}
