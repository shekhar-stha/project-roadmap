/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import InfoIcon from '@mui/icons-material/Info';
// import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import FileShowcase from '@/components/common/FileShowcase';
import SingleFile from '@/components/common/SingleFile';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function page() {
  const [open, setOpen] = useState(false)

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef();

  const [inputMessage, setInputMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { message: 'Hello!', user: 'other' },
    { message: 'Hi ', user: 'me' },
  ]);

  console.log(chatMessages)

  const handleMessageSend = () => {
    if (inputMessage.trim() !== '') {
      setChatMessages([...chatMessages, { message: inputMessage, user: 'me' }]);
      setInputMessage('');
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    setUploadedFiles(files);
    setChatMessages([...chatMessages, { message: inputMessage, user: 'me', files: Array.from(files) }]);
  };

  const endUser = {
    name: 'Jeremiah Kingston',
    imageSrc: '/jeremiah-profile.jpg',
  };

  return (
    <div className='chat-area relative h-full flex flex-col'>
      {/* Chat Head */}
      <div className='flex sticky top-[80px] bg-white z-20 items-center justify-between px-5 pe-15 chat-head shadow-6 border-b-2 border-stroke dark:border-none dark:bg-boxdark'>
        <div
          className="group relative flex items-center gap-4.5 px-4.5 py-3"
        >
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

        <div onClick={() => setOpen(true)}>
          <InfoIcon className='text-primary cursor-pointer' style={{ fontSize: '2rem' }} />
        </div>
      </div>

      {/* Chat Body */}
      <ChatBody img={endUser?.imageSrc} messages={chatMessages} />

      {/* Chat Inputs */}
      <div className='sticky bottom-0 bg-white dark:bg-boxdark-2 px-5 py-6'>
        <div className='flex items-center'>
          <button onClick={handleFileUpload} className='bg-primary px-4 py-2 text-white rounded-md mr-3'>
            <FileUploadIcon />
          </button>
          <input
            type='text'
            placeholder='Message here'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleMessageSend();
              }
            }}
            className='w-full h-12 px-5 py-3 border-2 rounded-md border-stroke dark:border-black dark:bg-boxdark focus:outline-none dark:text-white'
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>

    </div>
  )
}

const ChatBody = ({ messages, img }) => {

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return (
    <div className='px-5 py-10 flex flex-col flex-auto justify-end'>
      {messages.map((msg, index) => (
        <div key={index} className={`flex gap-2 my-4 ${msg.user === 'me' ? 'ms-auto' : 'justify-start'} items-end max-w-[60%]`}>
          {
            msg.user === 'other' && (
              <div className='h-10 w-10 rounded-full'>
                <Image
                  width={112}
                  height={112}
                  className="rounded-full h-10 w-10"
                  src={img}
                  alt="User"
                />
              </div>
            )
          }
          {/* {
            msg.message && (
              <div className={`bg-${msg.user === 'me' ? 'primary' : '[#F0F0F0] dark:bg-boxdark'} rounded-md p-4 overflow-hidden`}>
                <p className={`text-${msg.user === 'me' ? 'white' : '[#050505]'} text-base dark:text-white break-words`}>
                  {msg.message}
                </p>
              </div>
            )
          } */}

          {msg.message && (
            <div className={`bg-${msg.user === 'me' ? 'primary' : '[#F0F0F0] dark:bg-boxdark'} rounded-md p-4 overflow-hidden`}>
              <p className={`text-${msg.user === 'me' ? 'white' : '[#050505]'} text-base dark:text-white break-words`}>
                {msg.message.split(urlRegex).map((part, index) => (
                  urlRegex.test(part) ? (
                    <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                      {part}
                    </a>
                  ) : (
                    <Fragment key={index}>{part}</Fragment>
                  )
                ))}
              </p>
            </div>
          )}

          {
            msg?.files && (
              <div className='grid gap-3 grid-cols-3 place-content-start'>
                {
                  msg.files.map((file, index) => (
                    <SingleFile key={index} file={file} />
                  ))
                }
              </div>
            )
          }
        </div>
      ))}
    </div>
  );
};

