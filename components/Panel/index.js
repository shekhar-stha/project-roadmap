import React from 'react'

export default function Panel({ children, className }) {
    return (

        <div className={`rounded-sm xsm:p-8 p-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${className}`}>
            {children}
        </div>
    )
}
