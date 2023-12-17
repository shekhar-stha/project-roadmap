import ProfileCard from '@/components/Profile/ProfileCard'
import ProjectCard from '@/components/Projects/ProjectCard'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='header'>Projects</h1>
        <div>
          <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/projects/create'>
            Create Project
          </Link>
        </div>
      </div>

      <div class="two-col-grid">
        <ProjectCard />

        <ProjectCard />

        <ProjectCard />
      </div>
    </>
  )
}
