export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const publicPaths = ['/home']; // Define public paths here
      const isOnPublicPath = publicPaths.some(path => nextUrl.pathname.startsWith(path));
      const isOnDashboard = nextUrl.pathname.startsWith('/manage');

      console.log('Printing the path name:', nextUrl.pathname);

      if (isOnPublicPath) {
        return true; // Allow access to public paths without authentication
      }

      if (isLoggedIn) {
        if (nextUrl.pathname.startsWith('/login')) {
          return Response.redirect(new URL('/manage', nextUrl));
        }
        
        return true; // Allow authenticated users to access any route
      }

      if (isOnDashboard) {
        return false; // Redirect unauthenticated users to login page for dashboard routes
      }

      if (nextUrl.pathname.startsWith('/api/protected')) {
        return false;
      }
      


      return true; // Allow unauthenticated users to access other public routes
    },
  },
  providers: [], // Add providers with an empty array for now
  trustHost: true
};
