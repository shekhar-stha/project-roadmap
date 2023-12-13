import Image from 'next/image';
import React from 'react';

export default function DevProfileCard({ name, role, currentProject, assignedProjects, projectsToReview, imageUrl }) {
  return (
    <div className='profile-card w-full rounded-lg py-6 px-8 shadow-3 dark:border-strokedark dark:bg-boxdark'>
      <div className='flex gap-x-4'>
        <div className='img-dv'>
          <Image className="rounded-full w-20 h-20 object-cover" src={imageUrl} alt={name} width={200} height={200} />
        </div>
        <div className='profile-info my-auto'>
          <h3 className='text-2xl font-medium text-black dark:text-white'>{name}</h3>
          <p className='text-base text-black dark:text-white'>{role}</p>
        </div>
      </div>

      {/* Working Projects Info */}
      <div className='mt-4'>
        <p className='text-lg font-medium text-primary'> Currently Working on: <br /></p>
        <p className='text-black dark:text-white'>
          {currentProject}
        </p>
      </div>

      {/* Assigned Projects Info */}
      <div className='mt-4'>
        <p className='text-lg font-medium text-primary'> Assigned Projects: <br /></p>
        <p className='text-black dark:text-white'>
          {assignedProjects}
        </p>
      </div>
    </div>
  );
}