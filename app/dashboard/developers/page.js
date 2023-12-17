import ProfileCard from '@/components/Profile/ProfileCard';
import React from 'react'

export default function page() {
  const profiles = [
    {
      name: 'Shekhar Shresha',
      role: 'Lead Developer',
      listOneData: 'Escobar Landscaping',
      listTwoData: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping',
      imageUrl: '/shekhar-profile.jpg',
    },
    {
      name: 'Rojan Shresha',
      role: 'Junior Developer',
      listOneData: 'Escobar Landscaping',
      listTwoData: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping',
      imageUrl: '/shekhar-profile.jpg',
    },
  ];
  return (
    <>
      <h1 className='header'>Developers</h1>
      <div class="two-col-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            listOneTitle="Working on:"
            listOneData={profile.listOneData}
            listTwoTitle="Assigned Projects:"
            listTwoData={profile.listTwoData}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </>
  )
}
