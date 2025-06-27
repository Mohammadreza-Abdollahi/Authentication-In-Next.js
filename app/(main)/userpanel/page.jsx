import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-1/4 py-10 px-8 text-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 my-auto bg-white text-slate-800 rounded shadow-lg ">
        <h1><b>User Panel</b></h1>
        <Link className="block mt-5 w-full py-1 text-white text-lg rounded bg-gradient-to-br from-g-2 to-g-3" href={'/'}>Back to Home</Link>
      </section>
    </>
  );
}
