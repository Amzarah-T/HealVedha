'use client'

import { User } from '@nextui-org/react'
import { useSession } from 'next-auth/react';
import React from 'react'

function LoginUser() {
  const { data: session, status } = useSession();

  return (
    <div>
      <User
        className="text-default-500"
        name={status === "authenticated" ? session.user?.email : "Guest"}
        description={status === "authenticated" ? session.user?.userRole : "Click here to Sign In"}
      />
    </div>
  )
}

export default LoginUser