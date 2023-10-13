import type { NextAuthOptions } from 'next-auth'
// import GitHubProvider from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
export const options: NextAuthOptions = {
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        // GoogleProvider( {
        //     clientId: process.env.GOOGLE_ID as string,
        //     clientSecret: process.env.GOOGLE_SECRET as string,
        // }),
        DiscordProvider({
            clientId: process.env.DISCORD_ID as string,
            clientSecret: process.env.DISCORD_SECRET as string,
        }),
    ],
}