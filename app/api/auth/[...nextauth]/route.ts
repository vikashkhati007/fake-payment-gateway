// app/api/auth/[...nextauth]/route.ts
import { loginUser } from "@/database/actions";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let res = await loginUser(credentials?.username, credentials?.password);

        const user = {
          id: res.documents[0].$id,
          firstName: res.documents[0].firstName,
          lastName: res.documents[0].lastName,
          email: res.documents[0].email,
          card: res.documents[0].card,
          amount: res.documents[0].amount,
        };

        if (credentials?.username === res.documents[0].email && credentials?.password === res.documents[0].password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Agar user object available hai, to extra info token mein add karo
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.card = user.card;
        token.amount = user.amount;
      }
      return token;
    },
    async session({ session, token }) {
      // Session mein extra fields add karo
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.card = token.card;
      session.user.amount = token.amount;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Agar user sign in ho jata hai toh unhe home page pe redirect karo
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
