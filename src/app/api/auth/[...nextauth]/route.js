import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const adminUser = {
          id: "1",
          name: "Admin",
          email: "admin@example.com",
          password: "admin123",
          role: "admin",
        };

        // Contoh: autentikasi manual
        if (
          credentials.email === adminUser.email &&
          credentials.password === adminUser.password
        ) {
          return adminUser;
        }
        return null;
      },
    }),
    // Tambahkan provider lain sesuai kebutuhan
  ],
  secret: process.env.AUTH_SECRET,
});
