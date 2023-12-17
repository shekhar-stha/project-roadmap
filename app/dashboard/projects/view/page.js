import PointAnswers from '@/components/common/PointAnswers'
import React from 'react'

export default function page() {
    return (
        <div className="rounded-sm p-8 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <h2 className='header'>Escobar Landscaping</h2>
            <PointAnswers className='mb-2' title='Project Type:' data='Landscaping' />
            <PointAnswers className='mb-2' title=' Assigned to:' data='Shekhar Shrestha' />
            <PointAnswers className='mb-2' title=' Assigned by:' data='Jeremiah Kingston' />
            <PointAnswers className='mb-2' title=' Notes' data='Client is Hispanic' />
            <PointAnswers className='mb-2' title=' Description:' data='Please do the work as soon as possible' />
        </div>
    )
}
