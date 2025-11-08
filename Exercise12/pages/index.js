import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <main className="container">
      <h1>🔐 NextAuth.js Authentication</h1>

      {!session ? (
        <div>
          <p>You are not signed in</p>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
      ) : (
        <div>
          <img src={session.user.image} alt="Profile" className="avatar" />
          <h2>Welcome, {session.user.name}</h2>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </main>
  );
}
