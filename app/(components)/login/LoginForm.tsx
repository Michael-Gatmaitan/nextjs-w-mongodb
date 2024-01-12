"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const LoginForm = () => {
  const [userCreds, setUserCreds] = useState<UserAccount>({
    username: "",
    password: "",
  });

  const usernameFormRef = useRef<HTMLInputElement>(null);
  const passwordFormRef = useRef<HTMLInputElement>(null);

  const clearForm = () => {
    usernameFormRef.current!.value = "";
    passwordFormRef.current!.value = "";
  };

  const [attempted, setAttempted] = useState<boolean>(false);
  const [accountFound, setAccountFound] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    if (attempted && !accountFound) clearForm();
  }, [attempted, accountFound]);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoginLoading(true);

    const getAccountReq = await fetch("http://localhost:3000/api/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((data) => data.json())
      .then((result) => {
        if (result.noAccountFound) {
          setAttempted(true);
          setAccountFound(false);
        } else {
          if (result.length === 1) {
            setAccountFound(true);
          }
        }
      });

    clearForm();
  };

  const handleCredsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prev: UserAccount) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="grid gap-2" onSubmit={handleLoginSubmit}>
      <h3 className="text-xl font-bold text-white">
        Login {loginLoading ? "Logging in" : ""}
      </h3>

      {attempted && !accountFound ? <p>Invalid account, try again. </p> : ""}

      {accountFound ? <p>Account found!!!</p> : ""}

      <label htmlFor="username" className="text-white opacity-70">
        Username
      </label>
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        ref={usernameFormRef}
        onChange={handleCredsChange}
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
        ref={passwordFormRef}
        onChange={handleCredsChange}
        className="rounded-md text-xl p-2"
      />

      <button type="submit" className="primary-button mt-4 disabled:opacity-50">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
