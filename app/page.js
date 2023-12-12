"use client"
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, []);

  return (
    <main>
      <h1 className="text-xl font-bold underline">
        Project Roadmap
      </h1>
    </main>
  )
}
