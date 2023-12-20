import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function VideoCard({ href, thumbnailSrc, title, playlistSize, subData }) {
  return (
    <Link href={href} className="group">
      <div className="relative aspect-h-1 aspect-w-1 w-full max-h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          width={550}
          height={500}
          src={thumbnailSrc}
          className="z-0 h-full w-full object-cover object-center group-hover:opacity-75"
          alt='hello'
        />
        <div
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          className="absolute z-10 right-2 bottom-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
          {
            playlistSize
            &&
            <span className='text-white'>
              <PlaylistPlayIcon /> {playlistSize} Videos
            </span>
          }
        </div>
      </div>
      <h3 className="mt-4 text-base font-medium text-gray-700 line-clamp-2 text-black dark:text-white">{title}</h3>
      <p className="mt-1 text-sm font-small text-gray-900">{subData}</p>
    </Link>
  );
}
