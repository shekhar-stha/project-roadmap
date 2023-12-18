import Panel from '@/components/Panel'
import ProfileCard from '@/components/Profile/ProfileCard'
import PointAnswers from '@/components/common/PointAnswers'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const profile =
    {
        name: 'Roshni Maharjan',
        role: 'Junior Support Assistant',
        href: '/dashboard/support-assistant/detail',
        lists: [
            { title: 'Projects to Review', data: 'Richards Lawn Care' },
            { title: 'Email', data: 'roshni@zappysites.com' },
        ],
        imageUrl: '/support-assistant.jpg',
    }

    const completedProjects = [
        {
            name: 'Escobar Landscaping',
            type: 'Landscaping',
            githubLink: 'https://github.com',
            vercelLink: 'https://vercel.com',
            niftyLink: 'https://nifty.com',
            link: '/dashboard/projects/view',
        },
        {
            name: 'Escobar Landscaping',
            type: 'Landscaping',
            githubLink: 'https://github.com',
            vercelLink: 'https://vercel.com',
            niftyLink: 'https://nifty.com',
            link: '/dashboard/projects/view',
        },
    ]
    return (
        <>
            <div>
                <ProfileCard
                    name={profile.name}
                    role={profile.role}
                    href={profile.href}
                    imageUrl={profile.imageUrl}
                    lists={profile.lists}
                    mailBtn={true}
                />
            </div>
            <h3 className='header mt-9 ps-4'>Reviewed Projects</h3>
            {
                completedProjects.map((project, index) => (
                    <Panel key={index} className='my-6'>
                        <h2 className='header'>{project?.name}</h2>
                        <PointAnswers className='mb-2' title='Project Type:' data={project?.type} />
                        <PointAnswers className='mb-2' title='Github Link:' data={project?.githubLink} />
                        <PointAnswers className='mb-2' title='Vercel Link:' data={project?.vercelLink} />
                        <PointAnswers className='mb-8' title='Nifty Link:' data={project?.niftyLink} />
                        <Link
                            className="rounded bg-primary py-2 px-5 font-large text-base text-gray"
                            href={project?.link}>
                            View Detail
                        </Link>
                    </Panel>
                ))
            }
        </>
    )
}