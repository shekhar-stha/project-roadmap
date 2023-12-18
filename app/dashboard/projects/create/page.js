"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormField from '@/components/form/Formfield';


export default function Page() {
    const projectType = [
        { value: 'Lawn', label: 'Lawn' },
        { value: 'Auto', label: 'Auto' },
        { value: 'HVAC', label: 'HVAC' },
    ];

    const projectStatusOptions = [
        { value: 'unassigned', label: 'Unassigned' },
        { value: 'building', label: 'Building' },
        { value: 'submitted', label: 'Submitted' },
        { value: 'testing', label: 'Testing' },
        { value: 'approved', label: 'Approved' },
    ];

    const assignedTo = [
        { value: '', label: 'Assigned To' },
        { value: 'Shekhar Shrestha', label: 'Shekhar Shrestha' },
        { value: 'Rozan Shrestha', label: 'Rozan Shrestha' },
    ];

    const assignedBy = [
        { value: '', label: 'Assigned By' },
        { value: 'Roshni Maharjan', label: 'Roshni Maharjan' },
        { value: 'Jeremiah Kingston', label: 'Jeremiah Kingston' },
        { value: 'HVAC', label: 'HVAC' },
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
                        <h3 className="text-3xl font-medium text-black dark:text-white">Create Project</h3>
                    </div>
                    <div className="p-6.5">
                        <FormField
                            label="Project Name"
                            type="text"
                            placeholder="Enter your project name"
                            value={formValues.projectName}
                            onChange={(value) => setFormValues({ ...formValues, projectName: value })}
                        />
                        <FormField
                            label="Project Type"
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

                        <FormField
                            label="Assigned by"
                            type="select"
                            selectOptions={assignedBy}
                            value={formValues.assignedBy}
                            onChange={(value) => setFormValues({ ...formValues, assignedBy: value })}
                        />

                        <FormField
                            label="Description"
                            type="textarea"
                            placeholder="Type your message"
                            value={formValues.description}
                            onChange={(value) => setFormValues({ ...formValues, description: value })}
                        />

                        <FormField
                            label="Notes"
                            type="textarea"
                            placeholder="Write your notes here"
                            value={formValues.notes}
                            onChange={(value) => setFormValues({ ...formValues, notes: value })}
                        />

                        <FormField
                            label="Project Status"
                            type="radio"
                            radioOptions={projectStatusOptions}
                            value={formValues.projectStatus}
                            onChange={(value) => setFormValues({ ...formValues, projectStatus: value })}
                        />
                    </div>
                </div>

                <div className="rounded-sm p-8 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <FormField
                        label="Github Link"
                        type="text"
                        placeholder="Enter project github link"
                        value={formValues.githubLink}
                        onChange={(value) => setFormValues({ ...formValues, githubLink: value })}
                    />

                    <FormField
                        label="Vercel Link"
                        type="text"
                        placeholder="Enter project vercel link"
                        value={formValues.vercelLink}
                        onChange={(value) => setFormValues({ ...formValues, githubLink: value })}
                    />

                    <FormField
                        label="Nifty Link"
                        type="text"
                        placeholder="Enter nifty link"
                        value={formValues.niftyLink}
                        onChange={(value) => setFormValues({ ...formValues, githubLink: value })}
                    />
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                        Create Project
                    </button>
                </div>

            </form>
        </>
    );
}
