import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function VideoHorizontalCard({ href, thumbnailSrc, title, playlistSize, subData }) {
    return (
        <Link href={href} class="group flex flex-row xl:gap-1 gap-2">
            <div class="relative aspect-h-1 aspect-w-1 w-full max-w-[10.6rem] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    width={250}
                    height={200}
                    src={thumbnailSrc}
                    class="z-0 h-full w-full  object-cover object-center group-hover:opacity-75"
                    alt='hello'
                />
                <div
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
                    class="absolute z-10 right-2 bottom-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                    {
                        playlistSize
                        &&
                        <span className='text-white'>
                            <PlaylistPlayIcon /> {playlistSize} Videos
                        </span>
                    }
                </div>
            </div>
            <h3 class="mt-4 text-base font-medium text-gray-700 line-clamp-2 text-black dark:text-white">{title}</h3>
            <p class="mt-1 text-sm font-small text-gray-900 xl:line-clamp-1 line-clamp-2 text-black dark:text-white">{subData}</p>
        </Link>
    );
}
