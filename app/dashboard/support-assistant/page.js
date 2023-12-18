import ProfileCard from '@/components/Profile/ProfileCard';
import { Support } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

export default function SupportAssistantPage() {
  const supportAssistants = [
    {
      name: 'Roshni Maharjan',
      role: 'Junior Support Assistant',
      href: '/dashboard/support-assistant/detail',
      lists: [
        { title: 'Projects to Review', data: 'Richards Lawn Care' },
      ],
      imageUrl: '/support-assistant.jpg',
    },
    {
      name: 'Reecha Maharjan',
      role: 'Senior Support Assistant',
      href: '/dashboard/support-assistant/detail',
      lists: [
        { title: 'Projects to Review', data: 'Escobar Lawn Care' },
      ],
      imageUrl: '/support-assistant.jpg',
    },
  ];

  return (
    <>
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='header'>Support Assistants</h1>
        <div>
          <Link
            className='rounded bg-primary py-3 px-6 text-lg font-medium text-gray'
            href='/dashboard/support-assistant/create'>
            Add Support Assistant
          </Link>
        </div>
      </div>
      <div className="two-col-grid">
        {supportAssistants.map((assistant, index) => (
          <ProfileCard
            key={index}
            name={assistant.name}
            role={assistant.role}
            href={assistant.href}
            imageUrl={assistant.imageUrl}
            lists={assistant.lists}
          />
        ))}
      </div>
    </>
  );
}
