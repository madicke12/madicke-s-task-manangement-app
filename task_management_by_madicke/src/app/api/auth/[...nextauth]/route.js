// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOption = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    session: ({ session, token , user}) => ({
      ...session,
      user
    }),
  },
};

const handler = NextAuth(authOption);

export { handler as GET };
export { handler as POST };
