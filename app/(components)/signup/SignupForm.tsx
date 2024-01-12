"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { selectUserLoggedIn } from "@/app/(slices)/UserLogSlice";
import { useAppSelector } from "@/app/hooks";

const SignupForm = () => {
  const userLoggedin = useAppSelector(selectUserLoggedIn);

  useEffect(() => {
    console.log(userLoggedin);
  }, [userLoggedin]);
  const [userAccount, setUserAccount] = useState<UserAccount>({
    username: "",
    password: "",
  });

  const [usernameExists, setUsernameExists] = useState<boolean>(false);
  const [signupLoading, setSignupLoading] = useState<boolean>(false);

  const handleUserAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") setUsernameExists(false);

    setUserAccount((prev: UserAccount) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewAccountSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSignupLoading(true);

    const createAccountReq = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userAccount),
    })
      .then((data) => data.json())
      .then((res) => {
        setSignupLoading(false);
        if (res.message === "Username already exists.") {
          setUsernameExists(true);
          console.log("USERNAME ALREADY EXISTS");
        } else {
          console.log("ACCOUNT CREATED SUCCESSFULLY");
          // Redirect to homepage so user can now post.
        }
      });
  };

  return (
    <form className="grid gap-2" onSubmit={handleNewAccountSubmit}>
      <h3 className="text-xl font-bold text-white">
        Signup {signupLoading ? "Signing you up" : ""}
      </h3>

      <label htmlFor="username" className="text-white opacity-70">
        Username
      </label>
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={handleUserAccountChange}
        className="rounded-md text-xl p-2"
      />
      <label htmlFor="password" className="text-white opacity-70">
        Password
      </label>
      <input
        required
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleUserAccountChange}
        className="rounded-md text-xl p-2"
      />

      <button
        type="submit"
        className="primary-button mt-4 disabled:opacity-50"
        disabled={
          usernameExists || !userAccount.username || !userAccount.password
        }
      >
        Create account
      </button>
    </form>
  );
};

export default SignupForm;
