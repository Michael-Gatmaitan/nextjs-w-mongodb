import React, { useState } from "react";
import SignupForm from "../(components)/signup/SignupForm";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <main className="modal w-96 h-auto p-4 bg-indigo-800 rounded-lg">
        <SignupForm />
      </main>
    </div>
  );
};

export default page;
