export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Check if the user is authenticated
      const isLoggedIn = !!auth?.user;
      // Initialize protected routes
      // Here, all routes except the login page is protected
      const publicPaths = ['/login', '/about', '/blog']; // Add all public paths here

        // Initialize protected routes
        // Check if the current path is in the list of public paths
        const isOnProtected = !publicPaths.some(path => nextUrl.pathname.startsWith(path)) && nextUrl.pathname !== '/';
      
      if (isOnProtected) {
        if (isLoggedIn) return true;
        return false; // redirect to /login
      } else if (isLoggedIn) { 
        // redirected to homepage
        return Response.redirect(new URL('/manage', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};