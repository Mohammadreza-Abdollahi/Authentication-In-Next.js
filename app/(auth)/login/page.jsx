"use client";
import { loginAction } from "@/actions/loginAction";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(loginAction, {
    message: "",
    success: false,
  });
  return (
    <>
      <section className="w-1/4 py-10 px-8 text-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 my-auto bg-white text-slate-800 rounded shadow-lg ">
        <div>
          <span className="text-2xl">
            <b>Login</b>
          </span>
          <p className="text-xs text-red-500">
            {!state.success ? state.message : ""}
          </p>
        </div>
        <div>
          <form action={formAction}>
            <div className="text-start my-5">
              <label className="block" htmlFor="phone">
                Phone :
              </label>
              <input
                name="phone"
                className="w-full py-2 px-3 text-lg rounded-full border-2 border-gray-300 focus:border-g-3 focus:outline-none"
                id="phone"
                type="text"
              />
            </div>
            <div className="text-start my-5">
              <label className="block" htmlFor="password">
                Password :
              </label>
              <input
                name="password"
                className="w-full py-2 px-3 text-lg rounded-full border-2 border-gray-300 focus:border-g-3 focus:outline-none"
                id="password"
                type="text"
              />
            </div>
            <div className="text-start my-5">
              <input
                name="remember"
                className="mx-3"
                id="remember"
                type="checkbox"
              />
              <label className="select-none" htmlFor="remember">
                Remember me
              </label>
            </div>
            <div className="mt-3">
              <button
                disabled={pending}
                className="w-full py-3 text-white text-lg rounded-full bg-gradient-to-br from-g-4 to-g-5 disabled:opacity-50"
              >
                {pending ? "Plaese Wiat..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
