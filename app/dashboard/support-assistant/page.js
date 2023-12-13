import DevProfileCard from '@/components/Profile/DevProfileCard'
import SupportAssistantProfileCard from '@/components/Profile/SupportAssistantProfileCard';
import { Support } from '@mui/icons-material';
import React from 'react'

export default function page() {
  const profiles = [
    {
      name: 'Roshni Maharjan',
      role: 'Junior Support Assistant',
      projectsToReview: 'Richards Lawn Care',
      imageUrl: '/support-assistant.jpg',
    },
    {
      name: 'Reecha Maharjan',
      role: 'Senior Support Assistant',
      projectsToReview: 'Escobar Lawn Care',
      imageUrl: '/support-assistant.jpg',
    },
  ];
  return (
    <>
      <h1 className='text-3xl font-medium mb-6 text-black dark:text-white'>Developers</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {profiles.map((profile, index) => (
          <SupportAssistantProfileCard 
            key={index}
            name={profile.name}
            role={profile.role}
            projectsToReview={profile.projectsToReview}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </>
  )
}
