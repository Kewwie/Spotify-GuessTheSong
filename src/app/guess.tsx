
import { useSession } from "next-auth/react";

export default function Guess() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please sign in to access this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Guess the Song</h1>
      {/* Add your game logic here */}
    </div>
  );
}