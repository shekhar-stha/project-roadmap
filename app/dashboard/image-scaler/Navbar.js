import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <Image width={200} height={57} src="/logo.png" priority className="object-contain" alt="ZappySites Logo" />

                </a>
            </div>
        </nav>
    )
}
