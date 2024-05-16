import db from "@/lib/db";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

import { use } from "react";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
//   pages: {
//     signIn: "/auth/signin",
//   },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phonenumber: {
          label: "Phone Number",
          type: "text",
          placeholder: "Your phone number",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: {
            phonenumber: credentials?.phonenumber,
          },
        });

        if (!user) throw new Error("There is no user with this phone number");

        // This is Naive Way of Comparing The Passwords
        // const isPassowrdCorrect = credentials?.password === user.password;
        if (!credentials?.password) throw new Error("Please enter the provided password");
        const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPassowrdCorrect) throw new Error("Phone number and password do not match");

        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };