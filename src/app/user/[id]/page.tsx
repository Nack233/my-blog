// pages/user/[id].tsx

"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import HeaderUser from '@/app/components/HeaderUser';
import SidebarNormal from '@/app/components/sidebarUnknown';
import MainContent from '@/app/components/MainContent';
import { redirect } from 'next/navigation'; // Import redirect

interface User {
  id: string;
  name: string;
  email: string;
  // Add other fields as necessary
}

export default function UserPage() {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          redirect('/signin'); // Redirect using redirect function
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_NESTJS_API_URL}/auth/${params.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError('Error loading user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="blog-container flex flex-col min-h-screen">
      <HeaderUser user={user} />
      <div className="flex flex-1">
        <SidebarNormal />
        <MainContent />
      </div>
    </div>
  );
}
