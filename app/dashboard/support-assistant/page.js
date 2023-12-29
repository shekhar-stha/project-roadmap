"use client"
import ProfileCard from '@/components/Profile/ProfileCard';
import { API_URL } from '@/config/config';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchSupportAssistants } from '@/redux/slices/supportAssistantSlice';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function SupportAssistantPage() {
  const dispatch = useAppDispatch();
  const profiles = useAppSelector((state) => state.supportAssistants.profiles);
  const isLoading = useAppSelector((state) => state.developers.isLoading);
  const error = useAppSelector((state) => state.developers.error);

  const[loading, setLoading] = useState(false);
  console.log(loading)
  
  useEffect(() => {
    setLoading(true);
    dispatch(fetchSupportAssistants());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className='flex flex-wrap justify-between mb-6'>
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
        {
          profiles.length > 0 ?
            profiles.map((assistant, index) => (
              <ProfileCard
                key={index}
                name={assistant.fullName}
                role={assistant.userType === 'supportAssistant' ? 'Support Assistant' : assistant?.userType}
                href={`/dashboard/support-assistant/${assistant.id}`}
                imageUrl={assistant.imageUrl}
              />
            ))
            : <h4 className='text-white text-xl'>No Support Assistants Listed</h4>
        }
      </div>
    </>
  );
}
