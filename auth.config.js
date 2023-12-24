import Credentials from "next-auth/providers/credentials";
import dbConnect from "./lib/dbConnect";
import User from "./models/user.model";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      async authorize(credentials, request) {
        await dbConnect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          if (await user.isPasswordCorrect(credentials.passwrod)) {
            return user;
          }

          return null;
        } catch (error) {
          console.log(`next auth error : ${error}`);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // signIn() {
    //   this.redirect("/");
    // },
    async jwt({ token, user, account, profile }) {
      return { id: user?._id, isAdmin: user?.isAdmin, ...token };
    },
    async session({ session, user, token }) {
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};
