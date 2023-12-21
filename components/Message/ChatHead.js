// ChatHead.js
import React from 'react';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

export default function ChatHead({ endUser, openSlideover }) {
  return (
    <div className='flex sticky top-[80px] bg-white z-20 items-center justify-between px-5 pe-15 chat-head shadow-6 border-b-2 border-stroke dark:border-none dark:bg-boxdark'>
      <div className="group relative flex items-center gap-4.5 px-4.5 py-3">
        <div className="h-12.5 w-12.5 rounded-full">
          <Image
            width={112}
            height={112}
            className="rounded-full"
            src={endUser.imageSrc}
            alt="User"
          />
        </div>
        <div className=''>
          <h6 className="text-xl font-medium group-text-white text-black dark:text-white">
            {endUser.name}
          </h6>
        </div>
      </div>
      <div onClick={openSlideover}>
        <InfoIcon className='text-primary cursor-pointer' style={{ fontSize: '2rem' }} />
      </div>
    </div>
  );
}
