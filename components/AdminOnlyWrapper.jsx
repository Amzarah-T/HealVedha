'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function AdminOnlyWrapper({children}) {
    const session = useSession();

    if (session.status === 'authenticated' && session.data.user?.userRole === 'admin') {
        return children
    } else {
        return <></>
    }
}

export default AdminOnlyWrapper