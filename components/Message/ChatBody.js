import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SingleFile from '../common/SingleFile';
import "../../app/styles/css/scrollbar.css"

export default function ChatBody({ messages, img }) {
  const chatBodyRef = useRef(null);

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  useEffect(() => {
    // Scroll to the bottom when the component mounts or when new messages are added
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <div className='flex-auto'>
      <div  ref={chatBodyRef}  className='px-5 py-10 flex flex-col flex-auto justify-end overflow-y-auto overflow-x-hidden'>
        {messages.map((msg, index) => (
          <div key={index} className={`group flex gap-2 my-4 ${msg.user === 'me' ? 'ms-auto' : 'justify-start'} relative items-end w-fit md:max-w-[60%] max-w-[90%]`}>

            {/* Time */}
            <div
              className={`opacity-0 transition-opacity  md:group-hover:opacity-100 absolute z-10 dark:bg-strokedark bg-stroke   ${msg.user === 'other' ? 'ml-5 left-full' : 'mr-5 right-full'} inset-y-1/2  w-50 py-4 rounded-lg flex items-center justify-center`}>
              <p className={`text-[#050505] text-xs dark:text-white`}>
                {msg.timestamp}
              </p>
            </div>

            {msg.user === 'other' && (
              <div className='w-10 h-10 rounded-full' style={{ minWidth: '40px', minHeight: '40px' }}>
                <Image width={112} height={112} className='rounded-full min-h-10 min-w-10 h-10 w-10' src={img} alt='User' />
              </div>
            )}

            {msg.message && (
              <div className={`bg-${msg.user === 'me' ? 'primary' : 'stroke dark:bg-boxdark'} relative rounded-md p-4 overflow-hidden`}>
                <p className={`text-${msg.user === 'me' ? 'white' : '[#050505]'} text-base dark:text-white break-words`}>
                  {msg.message.split(urlRegex).map((part, index) => (
                    urlRegex.test(part) ? (
                      <a key={index} href={part} target='_blank' rel='noopener noreferrer'>
                        {part}
                      </a>
                    ) : (
                      <React.Fragment key={index}>{part}</React.Fragment>
                    )
                  ))}
                </p>
              </div>
            )}

            {msg?.files && (
              <div className={`message-files ${msg?.user === 'other' ? '' : 'flex-row-reverse'}`}>
                {msg.files.map((file, index) => (
                  <SingleFile key={index} file={file} />
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
