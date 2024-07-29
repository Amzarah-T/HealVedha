'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function LoggedInWrapper({children, message}) {
    const session = useSession();

    if (session.status === 'authenticated') {
        return children
    } else if (message) {
        return message;
    } {
        return <></>
    }
}

export default LoggedInWrapper