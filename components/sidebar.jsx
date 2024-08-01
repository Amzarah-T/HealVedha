
import { ArrowLeftCircleIcon, NewspaperIcon } from '@heroicons/react/20/solid';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    BeakerIcon,
    DocumentChartBarIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import AdminOnlyWrapper from './AdminOnlyWrapper';
import LoggedInWrapper from './LoggedInWrapper';

export default function SideBar() {

    return (
        <section className="h-screen w-64 fixed left-0 top-0 bg-gray-800 overflow-y-auto mt-16">
            <nav className="mt-6">
                <ul>
                    <LoggedInWrapper>
                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage'} className='flex'>
                                <HomeIcon className="w-5 h-5 mr-3" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </LoggedInWrapper>
                    <AdminOnlyWrapper>
                        {/* <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/posts'} className='flex'>
                                <NewspaperIcon className="w-5 h-5 mr-3" />
                                <span>Blog</span>
                            </Link>
                        </li> */}
                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/diseases'} className='flex'>
                                <NewspaperIcon className="w-5 h-5 mr-3" />
                                <span>Diseases</span>
                            </Link>
                        </li>
                        
                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/herbs'} className='flex'>
                                <BeakerIcon className="w-5 h-5 mr-3" />
                                <span>Herbs</span>
                            </Link>
                        </li>
                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/users'} className='flex'>
                                <UsersIcon className="w-5 h-5 mr-3" />
                                <span>Users</span>
                            </Link>
                        </li>
                    </AdminOnlyWrapper>
                    <LoggedInWrapper>
                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/researchPapers'} className='flex'>
                                <DocumentChartBarIcon className="w-5 h-5 mr-3" />
                                <span>Research Papers</span>
                            </Link>
                        </li>

                        <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                            <Link href={'/manage/profile'} className='flex'>
                                <UsersIcon className="w-5 h-5 mr-3" />
                                <span>Profile</span>
                            </Link>
                        </li>
                    </LoggedInWrapper>
                    
                    <li className="flex items-center px-6 py-3 text-white hover:bg-gray-700 cursor-pointer">
                        <Button onClick={signOut} color="warning" className='flex'>
                            <ArrowLeftCircleIcon className="h-5 mr-3" />
                            <span>Sign Out</span>
                        </Button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function PowerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v10" />
            <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
        </svg>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}