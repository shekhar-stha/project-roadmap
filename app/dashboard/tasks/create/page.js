/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useRef, useState } from 'react';
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
import Slideover from '@/components/ui/Slideover';
import LoadTemplateModal from '@/components/Tasks/LoadTemplateModal';
import TaskForm from '@/components/Tasks/TaskForm';

export default function Page() {
  const [open, setOpen] = useState(false)
  const [slideoverOpen, setSlideoverOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const taskBodyRef = useRef(null);

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
    setSlideoverOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <div className='md:flex justify-between align-middle mb-3'>
        <h1 className='header'>Create Task</h1>
        <div className='flex flex-wrap gap-2'>

          <button
            type='button'
            onClick={handleDivClick}
            className="rounded bg-primary me-4 py-3 px-6 text-lg font-medium text-gray"
          >
            Save Template
          </button>

          <button
            onClick={() => setShowModal(true)}
            className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray'>
            Load Template
          </button>
        </div>
      </div>

      <Panel className="my-4 flex flex-wrap gap-x-5">
        <FormField
          className="flex-auto"
          label="Project"
          type="text"
          placeholder="Enter for which project this is for"
          value={formValues.projectType}
          onChange={(value) => setFormValues({ ...formValues, projectType: value })}
          notRequired
        />

        <FormField
          className="flex-auto"
          label="Assigned to"
          type="text"
          placeholder="Enter who is assigned to this task"
          value={formValues.assignedTo}
          onChange={(value) => setFormValues({ ...formValues, assignedTo: value })}
        />
      </Panel>

      {/* Task Form */}
      <TaskForm
        tasks={tasks}
        handleAddTask={handleAddTask}
        handleTaskChange={handleTaskChange}
        handleSubmit={handleSubmit}
      />


      <LoadTemplateModal showModal={showModal} setShowModal={setShowModal} loadTemplate={loadTemplate} />

      {/* Slide Overs */}
      <Slideover open={slideoverOpen} setOpen={setSlideoverOpen}>
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
      </Slideover>
    </div>
  );
}
