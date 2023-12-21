import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SingleFile from '../common/SingleFile';

export default function ChatBody({ messages, img }) {
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts or when new messages are added
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return (
    <div ref={chatBodyRef} className='px-5 py-10 flex flex-col flex-auto justify-end overflow-y-auto'>
      {messages.map((msg, index) => (
        <div key={index} className={`flex gap-2 my-4 ${msg.user === 'me' ? 'ms-auto' : 'justify-start'} items-end md:max-w-[60%] max-w-[90%]`}>
          {msg.user === 'other' && (
            <div className='w-10 h-10 rounded-full' style={{ minWidth: '40px', minHeight: '40px' }}>
              <Image width={112} height={112} className='rounded-full min-h-10 min-w-10 h-10 w-10' src={img} alt='User' />
            </div>
          )}

          {msg.message && (
            <div className={`bg-${msg.user === 'me' ? 'primary' : '[#F0F0F0] dark:bg-boxdark'} rounded-md p-4 overflow-hidden`}>
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
  );
}
