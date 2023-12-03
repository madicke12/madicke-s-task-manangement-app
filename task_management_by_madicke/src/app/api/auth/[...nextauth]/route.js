import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import GoogleProvider  from 'next-auth/providers/google'
import NextAuth from "next-auth/next"



export const authOption= {
    adapter:PrismaAdapter(Prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })

    ]
}
const handler = NextAuth(authOption)


export {handler as GET}
export {handler as POST}