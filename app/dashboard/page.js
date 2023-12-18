import CardDataStats from '@/components/common/CardDataStats'
import Link from 'next/link'
import React from 'react'
import WebhookIcon from '@mui/icons-material/Webhook';
import ProjectCard from '@/components/Projects/ProjectCard';
export default function page() {
  return (
    <>
      <h2 className="header">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Ongoing Projects" total="8">
          <WebhookIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Idle Projects" total="12">
          <WebhookIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Completed Projects" total="45">
          <WebhookIcon className='fill-primary dark:fill-white' />
        </CardDataStats>

        <CardDataStats title="Projects to Review" total="9">
          <WebhookIcon className='fill-primary dark:fill-white' />
        </CardDataStats>
      </div>

      <div className='my-9'>
      <h2 className="header">Latest Projects</h2>
        <div class="two-col-grid">
          <ProjectCard />

          <ProjectCard />
        </div>
      </div>
    </>

  )
}
