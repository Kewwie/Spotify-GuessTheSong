export const env = {
	SPOTIFY_CLIENT_ID: process.env.AUTH_SECRET as string,
	SPOTIFY_CLIENT_SECRET: process.env.CLIENT_SECRET as string,
	AUTH_CALLBACK_URL: process.env.AUTH_CALLBACK_URL as string,
};
