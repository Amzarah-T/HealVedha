'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function LoggedInWrapper({children}) {
    const session = useSession();

    if (session.status === 'authenticated') {
        return children
    } else {
        return <></>
    }
}

export default LoggedInWrapper