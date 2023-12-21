import Image from 'next/image'
import React from 'react'
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
export default function SingleFile({file, className}) {
    return (
        <div className={`single-file relative group ${className ? className : ""}`}>
            <div className="mb-2 w-full h-36 flex flex-col justify-center items-center border dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary border-stroke bg-white shadow-default rounded-lg overflow-hidden relative">
                {file?.type?.startsWith('image/') ? (
                    <div>
                        <Image
                            width={100}
                            height={100}
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-full w-full p-3'>
                        <div className='flex flex-col items-center justify-center'>
                            <AttachmentIcon fontSize="large" />
                            <p className="text-center line-clamp-1">{file.name.split('.').pop().toUpperCase()}</p>
                        </div>
                    </div>
                )}
                {/* Download Button */}
                <a
                    href={URL.createObjectURL(file)}
                    download={file.name}
                    className="opacity-0 w-9 h-9 rounded-lg flex items-center justify-center bg-[#24303fd5] group-hover:opacity-100 absolute top-1 right-1  bg-blue-500 text-white cursor-pointer transition-opacity duration-300"
                >
                    <DownloadIcon />
                </a>
            </div>
            <p className='text-center line-clamp-1'>{file.name}</p>
        </div>
    )
}
