import React from 'react'
import PointAnswers from '../common/PointAnswers'
import Link from 'next/link'
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function ProjectCard() {
    return (
        <div className='profile-card relative w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
            <h5 className='text-3xl font-medium text-dark dark:text-white mb-2'>Escobar Landscaping and Lawn Care</h5>

            <PointAnswers className='mb-2' title='Project Type:' data='Landscaping' />

            <PointAnswers className='mb-2' title='Project Status:' data='In Progress' />

            <PointAnswers className='mb-2' title=' Assigned to:' data='Shekhar Shrestha' />

            <PointAnswers className='mb-5' title=' Assigned by:' data='Jeremiah Kingston' />

            <div className='flex gap-x-3 '>
                <Link
                    className="rounded bg-primary py-2 px-5 font-medium text-gray"
                    href='/dashboard/projects/view'>
                    View Detail
                </Link>

                <Link
                    className=" rounded bg-secondary py-2 px-5 font-medium text-boxdark"
                    href='/dashboard/projects/edit'>
                    Edit Detail
                </Link>
            </div>
        </div>
    )
}
