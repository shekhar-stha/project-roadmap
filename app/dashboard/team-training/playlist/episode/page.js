import VideoCard from '@/components/TeamTraining/VideoCard';
import VideoHorizontalCard from '@/components/TeamTraining/VideoHorizontalCard';
import Link from 'next/link';
import React from 'react';

const mockupData = [
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 1',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 2',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 3',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 4',
    subData: '',
  },
  {
    href: '/dashboard/team-training/playlist',
    thumbnailSrc: '/mockup-thumbnail.jpg',
    title: 'Nifty Essential Training for Absolute 5',
    subData: '',
  },

  // Add more mockup data as needed
];

export default function page() {
  return (
    <div class="dark:bg-boxdark-2 dark:text-bodydark">
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className='flex justify-between xl:flex-row flex-col'>
          <div className='xl:w-[75%] w-full'>
            <div className='mb-6'>
              <video className="h-full w-full rounded-lg" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className='mb-3 flex gap-3 justify-between sm:flex-row flex-col'>
              <div>
                <h2 className='text-3xl font-medium text-black dark:text-white'>
                  Nifty Essential Training for Absolute Beginners
                </h2>
              </div>
              <div className=''>
                <Link
                  href="/dashboard"
                  type='submit'
                  className="rounded w-44 text-center flex justify-center bg-primary py-2 px-4 font-medium text-gray">
                  Download PDF
                </Link>
              </div>
            </div>

            <p className='description text-black dark:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>

            <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
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
          <div className='xl:w-[23%] w-full'>
            <h3 className='text-2xl font-medium'>Related Videos</h3>
            <div className=' flex flex-col gap-y-4 mt-6'>
              {mockupData.map((video, index) => (
                <VideoHorizontalCard
                  key={index}
                  href={video.href}
                  thumbnailSrc={video.thumbnailSrc}
                  title={video.title}
                  playlistSize={video.playlistSize}
                  subData={video.subData}
                />
              ))}
            </div>

            <h3 className='text-2xl font-medium mt-8'>Other Videos</h3>
            <div className=' flex flex-col gap-y-4 mt-6'>
              {mockupData.map((video, index) => (
                <VideoHorizontalCard
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
      </div>
    </div>
  )
}
