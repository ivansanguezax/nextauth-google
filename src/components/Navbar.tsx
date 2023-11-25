"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  // Retrieve session information and status using useSession
  const { data: session, status } = useSession();

  return (
    // Navigation bar with a dark background and padding
    <nav className="bg-gray-800 p-4">
      {/* Container for responsive design */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Application title */}
        <h1 className="text-white text-xl font-bold">Next Auth Google</h1>
        {/* Section for navigation links and user authentication */}
        <div className="flex space-x-4 items-center">
          {/* Home link */}
          <Link href="/" passHref className="text-white hover:text-gray-300">
            Home
          </Link>
          {/* Conditional rendering based on user session */}
          {session?.user ? (
            // Displayed when the user is authenticated
            <div className="flex items-center space-x-4">
              {/* Dashboard link */}
              <Link href="/dashboard" passHref>
                <a className="text-white hover:text-gray-300">Dashboard</a>
              </Link>
              {/* User name */}
              <p className="text-white hover:text-gray-300">
                {session.user.name}
              </p>
              {/* User avatar */}
              <img
                src={session.user.image}
                alt=""
                className="h-8 w-8 rounded-full"
              />
              {/* Logout button */}
              <button
                onClick={async () => await signOut({ callbackUrl: "/" })}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            // Displayed when the user is not authenticated
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
              onClick={() => signIn("google")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
