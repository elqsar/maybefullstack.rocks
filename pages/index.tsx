import * as React from "react";
import Link from "next/link";

const Home = () => (
  <main>
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold tracking-wide uppercase">
        Maybefullstack
      </h2>
      <div className="flex">
        <Link
          href={{ pathname: "/profile/[name]" }}
          as={{ pathname: "/profile/vera" }}
        >
          <a className="flex-1 absolute left-0 ml-8 md:ml-32 mt-10 text-lg uppercase">
            Vera
          </a>
        </Link>
        <Link
          href={{ pathname: "/profile/[name]" }}
          as={{ pathname: "/profile/boris" }}
        >
          <a className="flex-1 absolute right-0 mr-8 md:mr-32 mt-10 text-lg uppercase">
            <span></span>Boris
          </a>
        </Link>
      </div>
    </div>
  </main>
);

export default Home;
