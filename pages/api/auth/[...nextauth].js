import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import connectToDatabase from "@/lib/db";
import { verifyPassword } from "@/lib/password";

export const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Check email or password");
        }
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Please enter correct password");
        }

        client.close();
        return {
          email: user.email,
          name: user.name,
        };
      },
    }),
    GoogleProvider(),
  ],
};

export default NextAuth(authOptions);
