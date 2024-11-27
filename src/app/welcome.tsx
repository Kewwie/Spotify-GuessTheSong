
import { signIn, signOut, useSession } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Welcome to Spotify Guess The Song</h1>
          <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
        </>
      )}
    </div>
  );
}