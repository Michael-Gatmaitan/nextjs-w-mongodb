"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavButtons = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn: boolean | null = JSON.parse(
      localStorage.getItem("userLoggedIn")!
    );

    if (loggedIn === null) {
      setUserLoggedIn(false);
      localStorage.setItem("userLoggedIn", JSON.stringify(false));
    } else {
      setUserLoggedIn(loggedIn);
    }

    console.log(loggedIn);
  }, []);

  return (
    <div className="flex gap-2">
      {userLoggedIn ? (
        <div>Welcome back!</div>
      ) : (
        <>
          <Link href="/signup">
            <button className="primary-button">Signup</button>
          </Link>
          <Link href="/login">
            <button className="primary-button">Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavButtons;
