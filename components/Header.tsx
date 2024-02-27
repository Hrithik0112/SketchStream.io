import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo-1.png" alt="logo" width={50} height={40} />
          <p className="text-white text-2xl font-bold">eraser</p>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-white transition hover:text-gray-300" href="#">
                  Use Cases
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-gray-300" href="#">
                  About
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-gray-300" href="#">
                  DiagramGPT
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-gray-300" href="#">
                  Pricing
                </a>
              </li>

              <li>
                <a className="text-white transition hover:text-gray-300" href="#">
                  Docs
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition "
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200 sm:block"
                href="#"
              >
                Try eraser &#8594;
              </a>
            </div>

            <button className="block rounded bg-white p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
