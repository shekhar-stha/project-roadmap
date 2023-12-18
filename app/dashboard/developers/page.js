import ProfileCard from '@/components/Profile/ProfileCard';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const profiles = [
    {
      name: 'Shekhar Shresha',
      role: 'Lead Developer',
      href: '/dashboard/developers/detail',
      lists: [
        { title: 'Working on', data: 'Escobar Landscaping' },
        { title: 'Assigned Projects', data: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping' },
      ],
      imageUrl: '/shekhar-profile.jpg',
    },
    {
      name: 'Rojan Shresha',
      role: 'Junior Developer',
      href: '/dashboard/developers/detail',
      lists: [
        { title: 'Working on', data: 'Escobar Landscaping' },
        { title: 'Assigned Projects', data: 'Richards Lawn Care, Ropers Fashions, NELO Landscaping' },
      ],
      imageUrl: '/shekhar-profile.jpg',
    },
  ];

  return (
    <>
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='header'>Developers</h1>
        <div>
          <Link className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray' href='/dashboard/developers/create'>
            Add Developer
          </Link>
        </div>
      </div>
      <div className="two-col-grid">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            href={profile.href}
            imageUrl={profile.imageUrl}
            lists={profile.lists}
          />
        ))}
      </div>
    </>
  );
}
