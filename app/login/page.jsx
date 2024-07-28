'use client';
 
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import UsersCreate from '@/components/users/create';
import axios from 'axios';
 
export default function LoginForm() {
  const processLogin = async (prevState, formData) => {
    const error = await authenticate(prevState, formData);
    
    if (error) {
      // throw new Error('Login failed. Please check your credentials.');
      setIsInvalid(true)
    } else {
      window.location.reload();
    }
  };

  const [errorMessage, dispatch] = useFormState(processLogin, undefined);
  const [isInvalid, setIsInvalid] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log('checking authentivationd', session.status)
    if (session.status === "authenticated") {
      router.push('/manage');
    }  
  }, [session])

  if (session.status === "authenticated") {
    router.push('/manage');
  }

  const save = async (formData) => {
      let data = {};
      for (const [key, value] of formData
      ) {
          data[key] = value;
          console.log(`${key}: ${value}\n`);
        }
      
        const res = await axios.post('http://localhost:3000/api/public/users', {
          username: formData.get('email'), 
          email: formData.get('email'), 
          firstName: formData.get('firstName'), 
          userrole: formData.get('userrole'),
          password: formData.get('password')
      })
  }
 
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 max-w-xl m-auto my-20">
        <h1 className={`mb-3 text-2xl`}>
          Please sign in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                // minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className='mt-4 flex gap-5 items-center justify-between'>
          <LoginButton isInvalid={isInvalid}/>
          <UsersCreate saveData={save} isRegisterMode={true} />
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {isInvalid && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{'Login failed. Please check your credentials.'}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
 
function LoginButton({isInvalid}) {
  const {pending} = useFormStatus();
 
  return (
    <Button type='submit' className="text-center" aria-disabled={pending} isInvalid={isInvalid} color={isInvalid ? "danger" : "success"} errorMessage="Wrong credentials. Please try again">
      Sign in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}