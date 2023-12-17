"use client"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyContainer = () => (
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
);

const FormField = ({ label, type, placeholder, selectOptions, radioOptions, value, onChange }) => {
    return (
        <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
                {label} <span className="text-meta-1">*</span>
            </label>
            {type === 'select' ? (
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        {selectOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <ExpandMoreIcon className="text-black dark:text-gray" />
                    </span>
                </div>
            ) : type === 'textarea' ? (
                <textarea
                    rows={6}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
            ) : type === 'text' ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
            ) : type === 'radio' ? (
                <div className='flex [540px]:flex-row flex-row [540px]:gap-y-0 gap-y-3 gap-x-5'>
                    {radioOptions.map((option, index) => (
                        <div className="flex items-center cursor-pointer bg-white rounded-md px-6 pe-7 py-2" key={index}>
                            <input
                                type="radio"
                                id={option.label}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange(option.value)}
                                className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor={option.label}
                                className="cursor-pointer ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 dark:text-black"
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

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
        projectName: 'Escobar Landscaping',
        projectType: 'HVAC',
        assignedTo: 'Shekhar Shrestha',
        assignedBy: 'Jeremiah Kingston',
        description: 'Please do the work as soon as possible',
        notes: 'Client is hispanic',
        projectStatus: 'testing',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success('Details Edited Successfully', {
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
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="text-3xl font-medium text-black dark:text-white">Edit Project</h3>
            </div>
            <form onSubmit={handleSubmit}>
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

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <ToastifyContainer />
        </div>
    );
}
