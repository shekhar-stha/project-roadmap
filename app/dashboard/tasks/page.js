import Tasks from '@/components/Tasks'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className='flex justify-between align-middle mb-3'>
                <h1 className='header'>Tasks</h1>
                <div>
                    <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/projects/create'>
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
