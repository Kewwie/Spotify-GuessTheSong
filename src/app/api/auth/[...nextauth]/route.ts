import NextAuth from 'next-auth';
import { type NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

import { env } from '@/utils/env';

const scope = [
	'user-read-currently-playing',
	'streaming',
	'playlist-read-private',
	'playlist-read-collaborative',
].join(' ');

const authOptions: NextAuthOptions = {
	providers: [
		SpotifyProvider({
			clientId: env.SPOTIFY_CLIENT_ID,
			clientSecret: env.SPOTIFY_CLIENT_SECRET,
			authorization: {
				params: { scope },
				url: 'https://accounts.spotify.com/authorize',
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.access_token = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			return {
				...session,
				token,
			};
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
