import ProfileCard from '@/components/Profile/ProfileCard';
import { Support } from '@mui/icons-material';
import React from 'react'

export default function page() {
  const profiles = [
    {
      name: 'Roshni Maharjan',
      role: 'Junior Support Assistant',
      listOneData: 'Richards Lawn Care',
      imageUrl: '/support-assistant.jpg',
    },
    {
      name: 'Reecha Maharjan',
      role: 'Senior Support Assistant',
      listOneData: 'Escobar Lawn Care',
      imageUrl: '/support-assistant.jpg',
    },
  ];
  return (
    <>
      <h1 className='header'>Support Assistants</h1>
      <div class="two-col-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            listOneTitle='Projects to Review'
            listOneData={profile.listOneData}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </>
  )
}
