import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

import { env } from '@/utils/env';

const scope =
	'user-read-currently-playing streaming playlist-read-private playlist-read-collaborative';

export default NextAuth({
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
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
				token.expires = account.expires_in;
			}
			return token;
		},
	},
	// ...additional configuration...
});
