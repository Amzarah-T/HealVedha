'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <div className='p-24'>
      <div className='text-3xl py-5'>My Profile</div>
      <div>Name: {session.user?.name}</div>
      <div>Email: {session.user?.email}</div>
      <div>User Role: {session.user?.userRole}</div>
      <div className='text-xs pt-5'>If you want to edit details contact our support team</div>
      <div className='text-xs pt-5'>📞 714-730-7919</div>
    </div>
  )
}

export default ProfilePage