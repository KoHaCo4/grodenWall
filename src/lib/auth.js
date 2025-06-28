import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        // Contoh: autentikasi manual
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "admin123"
        ) {
          return { id: 1, name: "Admin", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export { authOptions };
export default NextAuth(authOptions);
