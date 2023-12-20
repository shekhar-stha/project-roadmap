import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DarkMessageBox({message}) {
  return (
    <li>
    <Link
        className="relative flex gap-4.5 px-4.5 py-3 hover:bg-graydark dark:hover:bg-meta-4"
        href={message.href}
    >
        <div className="h-12.5 w-12.5 rounded-full">
            <Image
                width={112}
                height={112}
                className="rounded-full"
                src={message.imageSrc}
                alt="User"
            />
        </div>

        <div>
            <h6 className="text-sm font-medium text-white">
                {message.name}
            </h6>
            <p className={`text-sm line-clamp-1 text-white ${message?.seen ? null : 'font-semibold'}`}>{message.message}</p>
            <p className="text-xs text-white">{message.time}</p>
        </div>

        <span
            className={`absolute inset-y-2/4 right-2 z-1 h-2.5 w-2.5 rounded-full bg-meta-5 ${message?.seen ? "hidden" : "inline"
                }`}
        >

        </span>
    </Link>
</li>
  )
}
