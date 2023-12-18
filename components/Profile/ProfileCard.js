'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ProfileCard({ name, role, imageUrl, href, lists, mailBtn, mail }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Link href={href}>
            <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
                <div className='flex gap-x-4'>
                    <div className='img-dv'>
                        <Image className="rounded-full w-20 h-20 object-cover" src={imageUrl} alt={name} width={200} height={200} />
                    </div>
                    <div className='profile-info my-auto'>
                        <h3 className='text-2xl font-medium text-black dark:text-white'>{name}</h3>
                        <p className='text-base text-black dark:text-white'>{role}</p>
                    </div>
                </div>

                {lists?.map((list, index) => (
                    <div key={index} className='my-3'>
                        <p className='text-lg font-medium'>
                            <span className='text-primary dark:text-secondary pe-2'>{list.title}:</span>
                            <span className='text-black dark:text-white'>{list.data}</span>
                        </p>
                    </div>
                ))}

                {mailBtn && (
                    <div className='mt-5'>
                        <button onClick={openModal} className='px-6 rounded bg-primary p-3 font-medium text-gray'>
                            Send Email
                        </button>
                    </div>
                )}

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            {/* Background overlay */}
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            {/* Modal panel */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                &#8203;
                            </span>
                            <div className="inline-block align-bottom bg-white dark:bg-boxdark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                {/* Your form content goes here */}
                                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                                                Send Email
                                            </h3>
                                            {/* Your form components go here */}
                                            {/* For simplicity, I'm adding a close button */}
                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* End Modal */}
            </div>
        </Link>
    );
}
