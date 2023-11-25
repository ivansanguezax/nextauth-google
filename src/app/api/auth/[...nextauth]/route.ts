import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// NextAuth configuration
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // ... (Add any additional configuration here if needed)
});

// Exporting handler for both GET and POST requests
export { handler as GET, handler as POST };
