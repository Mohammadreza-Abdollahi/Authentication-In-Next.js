"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button disabled={pending} className="w-full py-3 text-white text-lg rounded-full bg-gradient-to-br from-g-4 to-g-5 disabled:opacity-50">
        {pending ? "Plaese Wiat..." : "Login"}
      </button>
    </>
  );
};

export default SubmitButton;
