/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useRef, useState } from 'react'
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
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef();

  const [inputMessage, setInputMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { message: 'Hello!', user: 'other', timestamp: formattedDate },
    { message: 'Hi ', user: 'me', timestamp: formattedDate },
    { message: 'Hello!', user: 'other', timestamp: formattedDate },
    { message: 'Hi ', user: 'me', timestamp: formattedDate },
    { message: 'Hello!', user: 'other', timestamp: formattedDate },
    { message: 'Hi ', user: 'me', timestamp: formattedDate },
    { message: 'Hello!', user: 'other', timestamp: formattedDate },
    { message: 'Hi ', user: 'me', timestamp: formattedDate },
  ]);

  const handleMessageSend = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { message: inputMessage, user: 'me', timestamp: formattedDate };
      setChatMessages([...chatMessages, newMessage]);
      setInputMessage('');
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    setUploadedFiles(files);
    const newMessage = { message: inputMessage, user: 'me', files: Array.from(files), timestamp: formattedDate };
    setChatMessages([...chatMessages, newMessage]);
  };

  const endUser = {
    name: 'Jeremiah Kingston',
    imageSrc: '/jeremiah-profile.jpg',
    role: 'Software Engineer',
  };

  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  return (
    <>
      <div className='chat-area relative h-full flex flex-col'>
        {/* Chat Head */}
        <ChatHead endUser={endUser} openSlideover={openSlideover} />

        {/* Chat Body */}
        <ChatBody img={endUser?.imageSrc} messages={chatMessages} />

        <div ref={messageEndRef} >
        </div>
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
