import DevProfileCard from '@/components/Profile/DevProfileCard'
import React from 'react'

export default function page() {
  const profiles = [
    {
      name: 'Shekhar Shresha',
      role: 'Lead Developer',
      currentProject: 'Escobar Landscaping',
      assignedProjects: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping',
      projectsToReview: 'Richards Lawn Care',
      imageUrl: '/shekhar-profile.jpg',
    },
    {
      name: 'Rojan Shresha',
      role: 'Junior Developer',
      currentProject: 'Richards Landscaping',
      assignedProjects: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping',
      projectsToReview: 'Richards Lawn Care',
      imageUrl: '/shekhar-profile.jpg',
    },
  ];
  return (
    <>
      <h1 className='text-3xl font-medium mb-6 text-black dark:text-white'>Developers</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {profiles.map((profile, index) => (
          <DevProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            currentProject={profile.currentProject}
            assignedProjects={profile.assignedProjects}
            projectsToReview={profile.projectsToReview}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </>
  )
}
