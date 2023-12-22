// TaskForm.js
import React, { useEffect, useRef } from 'react';
import FormField from '@/components/form/Formfield';

export default function TaskForm({ tasks, handleAddTask, handleTaskChange, handleSubmit }) {
    const taskEndRef = useRef(null);
    const scrollToBottom = () => {
        taskEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [handleAddTask])

    return (
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

            <div className='flex flex-wrap gap-2' ref={taskEndRef}>
                <button
                    type="submit"
                    className="flex flex-auto justify-center rounded bg-primary text-lg  p-3 font-medium text-gray"
                >
                    Create Task
                </button>

                <button
                    type='button'
                    onClick={handleAddTask}
                    className='rounded bg-primary flex-auto py-3 px-6 text-lg font-medium text-gray'>
                    Add Task
                </button>
            </div>
        </form>
    );
}
