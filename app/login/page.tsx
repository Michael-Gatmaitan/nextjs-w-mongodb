import React from "react";
import LoginForm from "../(components)/login/LoginForm";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <main className="modal w-96 h-auto p-4 bg-indigo-800 rounded-lg">
        <LoginForm />
      </main>
    </div>
  );
};

export default page;
