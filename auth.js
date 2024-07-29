import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Credentials from 'next-auth/providers/credentials';
import { model } from "@/models";

export const { signIn, signOut, auth, handlers } = NextAuth({
  
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials.email && credentials.password) {
          // Add you backend code here
          let response = await model.User.findOne({where: {email: credentials.email, password: credentials.password}});
          let loginRes = {
            success : response.id ? true: false,
            data : {
              user: {
                ID: response.id,
                NAME: response.firstName,
                EMAIL: response.email,
                USERROLE: response.userrole,
              },
            }
          }
          // Failed logging in
          if (!loginRes.success) return null;
          // Successful log in
          const user = {
            id: loginRes.data.user.ID ?? '',
            name: loginRes.data.user.NAME ?? '',
            email: loginRes.data.user.EMAIL ?? '',
            userRole: loginRes.data.user.USERROLE ?? ''
          };
          return user;
        }
        return null;
      },
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  trustHost: true,
  useSecureCookies: false
});