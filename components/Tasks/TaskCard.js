'use client'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import FormField from '../form/Formfield';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function TaskCard({ title, description, url, projectStatus, dueDate, assignedDate }) {
  const [showModal, setShowModal] = React.useState(false);
  const [open, setOpen] = useState(false)

  const [formValues, setFormValues] = useState({
    title: title,
    description: description,
    url: url,
    statusTypes: projectStatus,
  });

  const statusTypes = [
    { value: '', label: 'Status' },
    { value: 'to-do', label: 'To Do' },
    { value: 'completed', label: 'Completed' },

  ];


  const handleDivClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div
        className='group cursor-pointer relative w-full px-5 py-3 my-3 dark:bg-boxdark shadow-6 border border-[#c7c6c6] dark:border-none rounded-lg'>
        <h1 className='text-[1.2rem] font-medium mb-2'>{title}</h1>
        <p className='mb-2 text-[0.9rem] line-clamp-1'>{description}</p>
        <p className='w-full underline text-[0.9rem] line-clamp-2 mb-2'>
          {url}
        </p>
        <p className='text-[0.9rem] flex items-center gap-2'>
          <CalendarMonthIcon fontSize='medium' /> {dueDate}
        </p>
        <button className='mt-2 text-meta-5 underline' onClick={handleDivClick}>
          View Details
        </button>

        {/* Absolute Elements */}
        {/* Edit Button */}
        <span
          onClick={() => setShowModal(true)}
          className='w-7 h-7 z-30 absolute opacity-0 cursor-pointer transition-all group-hover:opacity-100 top-2 right-2 rounded-md p-1 bg-[#706f6f70] hover:bg-black flex items-center justify-center text-sm'>
          <EditNoteIcon className='text-white' />
        </span>

        {/* Completed Button */}
        <span
          className='w-7 h-7 z-30 absolute opacity-0 cursor-pointer transition-all group-hover:opacity-100 top-2 left-2 rounded-md p-1 bg-[#706f6fe5] hover:bg-black flex items-center justify-center text-sm'>
          <DoneIcon className='text-white hover:text-meta-3' />
        </span>
      </div>

      {/* Slide Overs */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg shadow-6  border-opacity-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md dark:text-white text-black  hover:text-meta-1 focus:outline-none"
                          onClick={() => setOpen(false)}
                        >
                          <CloseIcon className='hover:text-meta-1' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-boxdark py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-2xl mb-6 mt-5 font-semibold dark:text-white leading-6 text-gray-900">
                          {title}
                        </Dialog.Title>

                        <Dialog.Description className="text-base dark:text-white mb-3 font-normal text-gray-900">
                          {description}
                        </Dialog.Description>

                        <Dialog.Description className="text-base dark:text-white underline mb-3 font-normal text-gray-900">
                          {url}
                        </Dialog.Description>

                        <Dialog.Description className="text-base dark:text-white mb-3 font-normal text-gray-900">
                          <span className='font-medium'>Due:</span> <span>{dueDate}</span>
                        </Dialog.Description>

                        <Dialog.Description className="text-base dark:text-white mb-3 font-normal text-gray-900">
                          <span className='font-medium'>Assigned Date:</span> <span>{assignedDate}</span>
                        </Dialog.Description>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      {/* Modal */}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto min-w-[50%] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-boxdark bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl dark:text-white font-semibold">
                    Edit Task
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormField
                    label="Task Title"
                    type="text"
                    placeholder="Enter Task Name"
                    value={formValues.title}
                    onChange={(value) => setFormValues({ ...formValues, title: value })}
                  />

                  <FormField
                    label="Task Description"
                    type="text"
                    placeholder="Enter Task Description"
                    value={formValues.description}
                    onChange={(value) => setFormValues({ ...formValues, description: value })}
                  />

                  <FormField
                    label="URL"
                    type="text"
                    placeholder="Enter URL"
                    value={formValues.url}
                    onChange={(value) => setFormValues({ ...formValues, url: value })}
                  />

                  <FormField
                    label="Project Status"
                    type="select"
                    selectOptions={statusTypes}
                    value={formValues.statusTypes}
                    onChange={(value) => setFormValues({ ...formValues, statusTypes: value })}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="dark:text-white text-black background-transparent font-medium uppercase px-6 py-2 text-base outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-meta-5 text-white  font-medium  uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-[#000000]"></div>
        </>
      ) : null}
    </>
  )
}
