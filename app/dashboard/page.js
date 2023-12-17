import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>Dashboard Page</h1>
        <Link href='/dashboard'>
          Dashboard
          </Link> 
    </div>
  )
}
