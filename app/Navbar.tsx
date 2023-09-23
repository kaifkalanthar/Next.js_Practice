"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1>HeyG</h1>
      </Link>
      <div className="flex space-x-3">
        <Link href="/users" className="btn btn-primary">
          Users
        </Link>

        {status === "loading" && <h1>Loading....</h1>}
        {status === "authenticated" && (
          <div className="flex space-x-3 items-center">
            <h1>{session.user!.name}</h1>
            <Link href="api/auth/signout" className="btn">
              Sign out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
