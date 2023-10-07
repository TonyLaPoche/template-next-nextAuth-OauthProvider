import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider( {
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder:"votre nom d'utilisateur"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder:" votre mot de passe"
                }
            },
            
            async authorize(credentials, req) {
                // * PROCHAINEMENT FETCH API USER INFO
                // EN ATTENDANT ON SIMULE UNE AUTHENTIFICATION


                // console.log(credentials);
                
                const res = await fetch("/api/user", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                  })
                  const user = await res.json()
                  console.log(user);
                  
                // if (credentials?.username === user.username && credentials?.password === user.password) {
                //     console.log("success");
                //     return user
                // } else { 
                //     console.log("error");
                //     return null
                // }

                if (res.ok && user) {
                    return user
                  } else {
                    return null
                  }
            },
        })
    ],
}