"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';


export default function Page() {
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
    toast.success('Project Added Successfully', {
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


        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
        >
          Create Task
        </button>

      </form>
    </>
  );
}
