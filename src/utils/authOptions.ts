import  { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET! as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
     CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials,) {
        try {
          const res = await fetch(`${process.env.DOMAIN_SERVER}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });

          const user = await res.json();
          

          if (res.ok && user) {
            return user?.data.user; 
          }

          throw new Error(user.message || "Invalid credentials");
        } catch  {
          throw new Error("Invalid credentials");
        }
      }
    })
  
 
    
  ],
  pages:{
   signIn:"/login",
   error:"/login"
  },
  secret:process.env.NEXTAUTH_SECRET as string
}


