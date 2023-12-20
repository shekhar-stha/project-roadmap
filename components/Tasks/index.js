import React from 'react'
import TaskCard from './TaskCard'

export default function Tasks() {
    const tasks = [
        {
          title: 'Design Landing Page',
          description: 'Create an engaging and user-friendly landing page design for the new product launch.',
          url: 'https://www.example.com/landing-page',
          projectStatus: 'to-do',
          dueDate: 'Dec 15, 2023',
          assignedDate: 'Dec 05, 2023',
        },
        {
          title: 'Develop Backend API',
          description: 'Build the backend API to handle data processing and communication with the frontend.',
          url: 'https://github.com/project/backend-api',
          projectStatus: 'to-do',
          dueDate: 'Dec 20, 2023',
          assignedDate: 'Dec 08, 2023',
        },
        {
          title: 'QA Testing Phase',
          description: 'Perform thorough quality assurance testing to identify and fix any bugs or issues.',
          url: 'https://www.example.com/qa-testing',
          projectStatus: 'completed',
          dueDate: 'Dec 22, 2023',
          assignedDate: 'Dec 10, 2023',
        },
        {
          title: 'Implement User Authentication',
          description: 'Integrate user authentication features to ensure secure access to the application.',
          url: 'https://www.example.com/user-authentication',
          projectStatus: 'to-do',
          dueDate: 'Dec 18, 2023',
          assignedDate: 'Dec 07, 2023',
        },
        {
          title: 'Deployment to Production',
          description: 'Deploy the application to the production server and monitor for any issues.',
          url: 'https://www.example.com/deployment',
          projectStatus: 'completed',
          dueDate: 'Dec 23, 2023',
          assignedDate: 'Dec 12, 2023',
        },
      ];
      

    const handleCompleteButtonClick = (index) => {
        setTasks((prevTasks) => {
          const updueDatedTasks = [...prevTasks];
          const updueDatedTask = { ...updueDatedTasks[index] };
          
          // Toggle between 'to-do' and 'completed'
          updueDatedTask.projectStatus = updueDatedTask.projectStatus === 'to-do' ? 'completed' : 'to-do';
    
          updueDatedTasks[index] = updueDatedTask;
          return updueDatedTasks;
        });
      };
    return (
        <div className='flex overflow-x-auto'>
            <div className='to-do w-72 me-5'>
                {/* Header */}
                <div className='w-full flex items-center justify-center gap-3 dark:bg-boxdark shadow-6 border border-[#c7c6c6] dark:border-none py-2 rounded-lg'>
                    <h1 className='text-xl  font-semibold'>To Do</h1>
                    <div className='w-6 h-6 rounded-full flex items-center justify-center text-sm bg-primary'>
                        <span className='text-white dark:text-boxdark-2'>{(tasks.filter((task) => task?.projectStatus === 'to-do')).length}</span>
                    </div>
                </div>

                {/* Tasks */}
                {
                    tasks.map((task, index) => (
                        task.projectStatus === 'to-do' && (
                            <TaskCard
                                key={index}
                                title={task.title}
                                description={task.description}
                                url={task.url}
                                projectStatus={task.projectStatus}
                                dueDate={task.dueDate}
                                assignedDate={task.assignedDate}
                            />
                        )
                    ))
                }

            </div>

            <div className='completed w-72 me-5'>
                {/* Header */}
                <div className='w-full flex items-center justify-center gap-3 dark:bg-boxdark shadow-6 border border-[#c7c6c6] dark:border-none py-2 rounded-lg'>
                    <h1 className='text-xl font-semibold'>Completed</h1>
                </div>

                 {/* Tasks */}
                 {
                    tasks.map((task, index) => (
                        task.projectStatus === 'completed' && (
                            <TaskCard
                                key={index}
                                title={task.title}
                                description={task.description}
                                url={task.url}
                                projectStatus={task.projectStatus}
                                dueDate={task.dueDate}
                                assignedDate={task.assignedDate}
                            />
                        )
                    ))
                }
            </div>
        </div>
    )
}
