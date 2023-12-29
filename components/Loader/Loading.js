import React from 'react'

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 dark:bg-black bg-stroke">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-primary"></div>
        </div>
    )
}
