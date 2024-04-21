"use client";
import React from "react";
import {
  SignInButton,
  SignOutButton,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse">
      <SignedOut>
        <SignInButton>
          <button className="px-3">sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>

      <div className="px-3">Blog</div>
    </div>
  );
};

export default Navbar;
