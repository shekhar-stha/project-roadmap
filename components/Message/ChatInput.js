// ChatInputs.js
import React, { useRef } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function ChatInputs({ inputMessage, setInputMessage, handleMessageSend, handleFileChange }) {
  const fileInputRef = useRef();
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
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
  );
}
