"use client"

import Loading from '@/components/Loader/Loading';
import ProfileCard from '@/components/Profile/ProfileCard';
import { API_URL } from '@/config/config';
import { useAppSelector } from '@/redux/hooks';
import { fetchDevelopers } from '@/redux/slices/developersSlice';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Page() {
  const dispatch = useDispatch();
  const profiles = useAppSelector((state) => state.developers.profiles);
  const isLoading = useAppSelector((state) => state.developers.isLoading);
  const error = useAppSelector((state) => state.developers.error);

  useEffect(() => {
      dispatch(fetchDevelopers());
  }, [dispatch]);

  return (
    <>
      {
        isLoading ?
          <Loading />
          :
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
                  imageUrl={profile.photo}
                  extraTitle="Working On"
                  extraDescription="Project Name"
                />
              ))}
            </div>
          </>
      }
    </>
  );
}
