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
import ChatBody from '@/components/Message/ChatBody';
import Slideover from '@/components/ui/Slideover';
import ChatHead from '@/components/Message/ChatHead';
import SlideoverContent from '@/components/Message/SlideoverContent';
import ChatInputs from '@/components/Message/ChatInput';

export default function page() {
  const [slideoverOpen, setSlideoverOpen] = useState(false);

  const openSlideover = () => {
    setSlideoverOpen(true);
  };

  const closeSlideover = () => {
    setSlideoverOpen(false);
  };

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


  const handleMessageSend = () => {
    if (inputMessage.trim() !== '') {
      setChatMessages([...chatMessages, { message: inputMessage, user: 'other' }]);
      setInputMessage('');
    }
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
    role: 'Software Engineer',
  };

  return (
    <>
      <div className='chat-area relative h-full flex flex-col'>
        {/* Chat Head */}
        <ChatHead endUser={endUser} openSlideover={openSlideover} />

        {/* Chat Body */}
        <ChatBody img={endUser?.imageSrc} messages={chatMessages} />

        {/* Chat Inputs */}
        <ChatInputs
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleMessageSend={handleMessageSend}
          handleFileChange={handleFileChange}
        />
      </div>

      <Slideover open={slideoverOpen} setOpen={setSlideoverOpen}>
        <SlideoverContent endUser={endUser} chatMessages={chatMessages} />
      </Slideover>
    </>
  )
}
