import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1>HeyG</h1>
      </Link>
      <Link href="/users" className="btn btn-primary">
        Users
      </Link>
    </div>
  );
};

export default Navbar;
