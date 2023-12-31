import Tasks from '@/components/Tasks'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className='flex flex-wrap justify-between items-center mb-6'>
                <h1 className='header'>Tasks</h1>
                <div>
                    <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/tasks/create'>
                        Create Task
                    </Link>
                </div>
            </div>
            <div>
               <Tasks />
            </div>
        </>
    )
}
