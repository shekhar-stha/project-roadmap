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
import Link from 'next/link';
import Panel from '@/components/Panel';
import DownloadIcon from '@mui/icons-material/Download';

export default function Page() {
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = React.useState(false);

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    assignedTo: '',
    assignedBy: '',
    project: '',
    completionStatus: '',
  });

  const [templateTasks, setTemplateTasks] = useState([
    {
      templateId: 1,
      templateName: 'Junior Development Training',
      title: 'watch YT',
      description: 'Watch YT videos on how to code',
      URL: 'https://www.youtube.com/watch?v=Q33KBiDriJY',
      deadline: '5 days',
    },
    {
      templateId: 1,
      templateName: 'Junior Development Training',
      title: 'watch YT',
      description: 'Watch YT videos on how to code',
      URL: 'https://www.youtube.com/watch?v=Q33KBiDriJY',
      deadline: '5 days',
    },
    {
      templateId: 1,
      templateName: 'Junior Development Training',
      title: 'watch YT',
      description: 'Watch YT videos on how to code',
      URL: 'https://www.youtube.com/watch?v=Q33KBiDriJY',
      deadline: '5 days',
    },
    {
      templateId: 1,
      templateName: 'Junior Development Training',
      title: 'watch YT',
      description: 'Watch YT videos on how to code',
      URL: 'https://www.youtube.com/watch?v=Q33KBiDriJY',
      deadline: '5 days',
    }
  ]);

  const loadTemplate = (templateId) => {
    const selectedTemplate = templateTasks.filter((template) => template.templateId === templateId);

    console.log(selectedTemplate)

    if (selectedTemplate) {
      const newTasks = selectedTemplate.map(({ title, description, URL, deadline }) => ({
        title,
        description,
        URL,
        deadline,
      }));

      setTasks(newTasks);
      setShowModal(false);
      toast.success('Template loaded successfully', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('Template not found', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const [tasks, setTasks] = useState([{ title: '', description: '', URL: '', deadline: '', }]);


  const handleAddTask = () => {
    // Check if the previous task's title is empty
    const previousTask = tasks[tasks.length - 1];
    if (!previousTask || previousTask.title.trim() !== '') {
      setTasks([...tasks, { title: '', description: '', URL: '', deadline: '' }]);
    } else {
      toast.error('Please fill in the previous task title before adding a new task.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const handleTaskChange = (index, fieldName, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][fieldName] = value;
    setTasks(updatedTasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTasks([{ title: '', description: '', URL: '', deadline: '' }]);
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
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='header'>Create Task</h1>
        <div className=''>

          <button
            type='button'
            onClick={handleDivClick}
            className="rounded bg-primary me-4 py-3 px-6 text-lg font-medium text-gray"
          >
            Save Template
          </button>

          <button
            onClick={() => setShowModal(true)}
            className='rounded bg-primary me-4 py-3 px-6 text-lg font-medium text-gray'>
            Load Template
          </button>
        </div>
      </div>
      <Panel className="my-4 grid grid-cols-2 gap-x-5">
        <FormField
          label="Project"
          type="text"
          placeholder="Enter for which project this is for"
          value={formValues.projectType}
          onChange={(value) => setFormValues({ ...formValues, projectType: value })}
          notRequired
        />

        <FormField
          label="Assigned to"
          type="text"
          placeholder="Enter who is assigned to this task"
          value={formValues.assignedTo}
          onChange={(value) => setFormValues({ ...formValues, assignedTo: value })}
        />
      </Panel>

      {/* Task Form */}
      <form onSubmit={handleSubmit}>

        {tasks.map((task, index) => (
          <div key={index} className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mb-6">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="text-3xl font-medium text-black dark:text-white">{`Task ${index + 1}`}</h3>
            </div>

            <div className="p-6.5">
              <FormField
                label="Task Title"
                type="text"
                placeholder="Enter your task name"
                value={task.title}
                onChange={(value) => handleTaskChange(index, 'title', value)}
              />

              <FormField
                label="Task Description"
                type="textarea"
                placeholder="Task Description"
                value={task.description}
                onChange={(value) => handleTaskChange(index, 'description', value)}
              />

              <FormField
                label="URL"
                type="text"
                placeholder="Enter URLs"
                value={task.URL}
                onChange={(value) => handleTaskChange(index, 'URL', value)}
              />

              <FormField
                label="Deadline"
                type="text"
                placeholder="Enter Deadline"
                value={task.deadline}
                onChange={(value) => handleTaskChange(index, 'deadline', value)}
              />
            </div>
          </div>
        ))}

        <div className='flex gap-2'>
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
          >
            Create Task
          </button>

          <button
            type='button'
            onClick={handleAddTask}
            className='rounded bg-primary w-full me-4 py-3 px-6 text-lg font-medium text-gray'>
            Add Another Task
          </button>
        </div>
      </form>


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
                    Load Templates
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div
                    onClick={() => loadTemplate(1)}
                    className='shadow flex items-center justify-between my-6 dark:bg-form-input bg-stroke p-2 px-4'>
                    <p className='dark:text-white text-black font-medium'>Junior Development Training</p>
                    <div className='w-10 h-10 cursor-pointer bg-primary flex items-center justify-center rounded-full text-white'>
                      <DownloadIcon />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-primary text-white  font-medium  uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-[#000000]"></div>
        </>
      ) : null}

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
