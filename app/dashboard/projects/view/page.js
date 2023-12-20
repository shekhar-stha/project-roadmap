/* eslint-disable @next/next/no-img-element */
"use client"

import PointAnswers from '@/components/common/PointAnswers'
import FormField from '@/components/form/Formfield'
import React from 'react'
import { useState, useEffect, useRef } from "react";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Panel from '@/components/Panel';
import FileShowcase from '@/components/common/FileShowcase';
import FileUpload from '@/components/form/FileUpload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';
import Comment from '@/components/common/Comment';
import Link from 'next/link';
import Tasks from '@/components/Tasks';

export default function Page() {
    const commentFile = useRef();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const [commentValues, setCommentValues] = useState({
        comment: "",
    });

    const [comments, setComments] = useState([
        {
            userName: "Shekhar Shrestha",
            date: formattedDate,
            text: "Hey, I have completed the task. Please review it.",
            imageUrl: "/shekhar-profile.jpg",
            files: []
        },
    ]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            userName: "Jeremiah Kingston",
            date: formattedDate,
            text: commentValues.comment,
            imageUrl: "/shekhar-profile.jpg",
            files: [],
        };

        setComments((prevComments) => [...prevComments, newComment]);
        setCommentValues({ comment: "" });
    };

    const uploadCommentFile = (e) => {
        e.preventDefault();
        const files = e.target.files;
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);

        console.log(files, "uploaded fle")
        const newComment = {
            userName: "Jeremiah Kingston",
            date: formattedDate,
            text: commentValues.comment,
            imageUrl: "/shekhar-profile.jpg",
            files: files,
        };

        setComments((prevComments) => [...prevComments, newComment]);
        setCommentValues({ comment: "" });
    };

    const commentFileUploadTrigger = () => {
        commentFile.current.click();
    }

    console.log("Comments", comments)

    return (
        <>
            <Panel>
                <div className='flex justify-between align-middle mb-3'>
                    <h1 className='header'>Roper Fashions</h1>
                    <div>
                        <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/projects/edit'>
                            Edit Project
                        </Link>
                    </div>
                </div>
                <PointAnswers className='mb-2' title='Project Type:' data='Landscaping' />
                <PointAnswers className='mb-2' title=' Assigned to:' data='Shekhar Shrestha' />
                <PointAnswers className='mb-2' title=' Assigned by:' data='Jeremiah Kingston' />
                <PointAnswers className='mb-2' title=' Notes:' data='Client is Hispanic' />
                <PointAnswers className='mb-2' title=' Description:' data='Please do the work as soon as possible' />
                <PointAnswers className='mb-2' title='Github Link:' data='https:' />
                <PointAnswers className='mb-2' title='Vercel Link:' data='https:' />
                <PointAnswers className='mb-2' title='Nifty Link:' data='https:' />
            </Panel>

            {/* Tasks */}
            <div className="my-4 px-5">
                <h2 className="header">Tasks</h2>
                <Tasks />
            </div>

            {/* Files Section */}
            <Panel className="my-4">
                <h2 className="header">Files</h2>
                <div className="files-upload">
                    <FileUpload onFileChange={handleFileChange} />
                </div>

                <FileShowcase uploadedFiles={uploadedFiles} />
            </Panel>
            {/* Files Section */}

            {/* Comment Section */}
            <Panel className="my-4">
                <h2 className='header'>Comments</h2>
                <div className='comments-list my-10 w-full'>
                    {
                        comments.map((comment, index) => (
                            <Comment
                                key={index}
                                userName={comment.userName}
                                date={comment.date}
                                text={comment.text}
                                imageUrl={comment.imageUrl}
                                files={comment.files}
                            />
                        ))
                    }
                </div>

                <form onSubmit={handleCommentSubmit}>
                    <div className="relative flex">
                        <div onClick={commentFileUploadTrigger} className="cursor-pointer absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <CloudUploadIcon className='text-[#5d5d5e] dark:text-[#64748b]' />
                        </div>

                        <div className='absolute h-8 w-0.5 bg-[#cdd3dd] dark:bg-[#64748b] left-12 top-2'>

                        </div>

                        <input type='file' className='hidden' ref={commentFile} onChange={uploadCommentFile} multiple />
                        <input
                            type="text"
                            id="comment"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent ps-15 py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            placeholder="Post a comment"
                            value={commentValues.comment}
                            onChange={(e) => setCommentValues({ ...commentValues, comment: e.target.value })}
                            required
                        />


                        <button type="submit" className="dark:text-boxDark  absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <SendIcon className='text-meta-5 dark:text-[#64748b]' />
                        </button>
                    </div>
                </form>
            </Panel>
        </>
    )
}
