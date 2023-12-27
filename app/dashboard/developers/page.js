"use client"

import ProfileCard from '@/components/Profile/ProfileCard';
import { API_URL } from '@/config/config';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Page() {
  const [profiles, setProfiles] = useState([]);


  useEffect(() => {
    apiCall()
  }, [])

  const apiCall = async () => {
    const apiEndpoint = `${API_URL}/user/getUsers/developers`;

    try {
      const response = await axios.get(`${apiEndpoint}`);
      if (response?.data?.status) {
        console.log("respone", response?.data?.data)
        setProfiles(response?.data?.data);
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

  //     axios.get(apiEndpoint)
  //       .then((response) => {
  //         console.log(response);
  //         setProfiles(response.data);
  //       })
  //       .catch((error) =>
  //         toast.error(error?.response?.data?.msg, {
  //           position: toast.POSITION.BOTTOM_RIGHT,
  //         });
  //     console.error('Error fetching profiles:', error);
  //       );
  // }, []);

  return (
    <>
      <div className='flex flex-wrap justify-between items-center mb-6'>
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
            name={profile.fullName}
            role={profile.userType}
            href={`/dashboard/developers/${profile.id}`}
            imageUrl={profile?.photo ? profile.photo : ""}
            extraTitle="Working On"
            extraDescription="Project Name"
          />
        ))}
      </div>
    </>
  );
}
