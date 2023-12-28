"use client"
import ProfileCard from '@/components/Profile/ProfileCard';
import { API_URL } from '@/config/config';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SupportAssistantPage() {
  const [supportAssistants, setSupportAssistants] = useState([]);
  useEffect(() => {
    apiCall()
  }, [])

  const apiCall = async () => {
    const apiEndpoint = `${API_URL}/user/getUsers/supportAssistants`;

    try {
      const response = await axios.get(`${apiEndpoint}`);
      if (response?.data?.status) {
        console.log("respone", response?.data?.data)
        setSupportAssistants(response?.data?.data);
      } else {
        console.error('Error');
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.error('Error fetching profiles:', error);
    }
  }

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
          supportAssistants.length > 0 ?
            supportAssistants.map((assistant, index) => (
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
