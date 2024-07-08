"use server"

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidateTag } from 'next/cache'
 
// ...
 
export async function authenticate(
  prevState,
  formData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type)
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createPost(data) {
  return data;
}

export async function revalidatePosts() {
  revalidateTag('adminPosts')
}

export async function revalidateServices() {
  revalidateTag('adminServices')
}

export async function revalidateHerbs() {
  revalidateTag('adminHerbs')
}

export async function revalidateDiseases() {
  revalidateTag('adminDiseases')
}

export async function revalidateDiseasesTreatment() {
  revalidateTag('adminDiseasesTreatment')
}