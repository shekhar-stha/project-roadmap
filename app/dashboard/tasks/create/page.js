"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseIcon from '@mui/icons-material/Close';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

export default function Page() {
  const [open, setOpen] = useState(false)
  const projectType = [
    { value: 'Escobar', label: 'Escobar' },
    { value: 'Escobar', label: 'Escobar' },
    { value: 'Escobar', label: 'Escobar' },
  ];

  const assignedTo = [
    { value: '', label: 'Assigned To' },
    { value: 'Shekhar Shrestha', label: 'Shekhar Shrestha' },
    { value: 'Rozan Shrestha', label: 'Rozan Shrestha' },
  ];

  const [formValues, setFormValues] = useState({
    projectName: '',
    projectType: '',
    assignedTo: '',
    assignedBy: '',
    description: '',
    notes: '',
    projectStatus: '',
    githubLink: '',
    vercelLink: '',
    niftyLink: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('Task Created Successfully', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    console.log(formValues);
  };

  const handleDivClick = () => {
    setOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-3xl font-medium text-black dark:text-white">Create Task</h3>
          </div>
          <div className="p-6.5">
            <FormField
              label="Task Title"
              type="text"
              placeholder="Enter your task name"
              value={formValues.projectName}
              onChange={(value) => setFormValues({ ...formValues, projectName: value })}
            />

            <FormField
              label="Task Description"
              type="textarea"
              placeholder="Task Description"
              value={formValues.description}
              onChange={(value) => setFormValues({ ...formValues, description: value })}
            />

            <FormField
              label="URL"
              type="text"
              placeholder="Enter URLs"
              value={formValues.projectName}
              onChange={(value) => setFormValues({ ...formValues, projectName: value })}
            />

            <FormField
              label="Project"
              type="select"
              selectOptions={projectType}
              value={formValues.projectType}
              onChange={(value) => setFormValues({ ...formValues, projectType: value })}
            />

            <FormField
              label="Assigned to"
              type="select"
              selectOptions={assignedTo}
              value={formValues.assignedTo}
              onChange={(value) => setFormValues({ ...formValues, assignedTo: value })}
            />

          </div>
        </div>


        <div className='flex gap-2'>
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Create Task
          </button>
          <button
            type='button'
            onClick={handleDivClick}
            className="flex w-full justify-center rounded bg-secondary p-3 font-medium text-primary"
          >
            Save Template
          </button>
        </div>

      </form>

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
                          Create New Template
                        </Dialog.Title>
                        <form className='flex gap-1 items-center'>
                          <FormField
                            className={'w-full'}
                            label="New Template"
                            type="text"
                            placeholder="New Template Name"
                            value={formValues.projectName}
                            onChange={(value) => setFormValues({ ...formValues, projectName: value })}
                          />
                          <button
                            type="submit"
                            className="flex justify-center rounded p-2 bg-primary font-medium mt-3 text-gray"
                          >
                            <BookmarkAddIcon />
                          </button>
                        </form>

                        <Dialog.Title className="text-2xl mb-6 mt-5 font-semibold dark:text-white leading-6 text-gray-900">
                          Templates
                        </Dialog.Title>

                        <div className='shadow flex items-center justify-between my-6 dark:bg-form-input bg-stroke p-2 px-4'>
                          <p className='dark:text-white text-black font-medium'>Junior Development Training</p>
                          <div className='w-10 h-10 cursor-pointer bg-primary flex items-center justify-center rounded-full text-white'>
                          <TurnedInNotIcon />
                          </div>
                        </div>

                        <div className='shadow flex items-center justify-between my-6 dark:bg-form-input bg-stroke p-2 px-4'>
                          <p className='dark:text-white text-black font-medium'>Support Assistant Training</p>
                          <div className='w-10 h-10 cursor-pointer bg-primary flex items-center justify-center rounded-full text-white'>
                          <TurnedInNotIcon />
                          </div>
                        </div>

                        
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
    </>
  );
}
