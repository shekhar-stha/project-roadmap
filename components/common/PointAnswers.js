import React from 'react'

export default function PointAnswers({ title, data, className }) {
    return (
        <p className={`text-lg text-dark dark:text-white line-clamp-3 ${className}`}>
            <span className='text-primary dark:text-secondary me-3 font-medium'>
                {title}
            </span>
            <span>
                {data}
            </span>
        </p>
    )
}
