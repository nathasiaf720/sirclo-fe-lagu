import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { submitLogin } from "helpers/auth";

const options = {
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const loginData = {
          username: credentials.username,
          password: credentials.password,
          getProfile: true,
        };

        try {
          return submitLogin(loginData).then((data) => {
            //console.log(data);
            if (!data.message && !data.status) {
              const user = {
                token: data.token,
                userName: data.userName,
                headAccount: data.headAccount,
                nik: data.nik,
                name: data.name,
                email: data.email,
                department: data.department,
                userType: data.userType,
              };

              return user;
            } else return null;
          });
        } catch (error) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // Expiration: 1 month
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
};

export default (req, res) => NextAuth(req, res, options);
