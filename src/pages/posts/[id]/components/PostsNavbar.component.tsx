import MediumLogo from "@/pages/components/MediumLogo.component";
import { ReactNode } from "react";

export default function PostsNavbar(): ReactNode {
  return (
    <nav className="w-full bg-white shadow">
      <div className="flex w-full justify-between md:hidden px-2 py-2">
      <a className="px-2 py-1 text-xs font-light text-slate-600">
            <button>Open in app</button>
          </a>
        <div className="flex gap-3 text-xs font-light text-slate-600">
          <a className="rounded-3xl bg-green-700 px-2 py-1 text-white hover:bg-green-800">
            <button className="self-center">Sign up</button>
          </a>
          <a className="px-2 py-1 hover:text-black">
            <button>Sign in</button>
          </a>
        </div>
      </div>
      <div className="flex w-full justify-between px-5 py-2">
        <div className="flex justify-start gap-5 self-center">
          <MediumLogo className="w-36 self-center" />
          <div className="hidden sm:flex gap-2 rounded-3xl bg-slate-100 p-2 text-sm font-light text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              placeholder="Search..."
              className="self-center bg-slate-100 text-slate-500 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-3 text-sm font-light text-slate-500">
          <a className="hidden sm:flex gap-1 px-3 py-2 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <button>Write</button>
          </a>
          <a className="hidden md:flex rounded-3xl bg-green-700 px-3 py-2 text-white hover:bg-green-800">
            <button className="self-center">Sign up</button>
          </a>
          <a className="hidden md:flex px-3 py-2 hover:text-black">
            <button>Sign in</button>
          </a>
          <div className="flex sm:hidden gap-2 rounded-3xl p-2 text-sm font-light text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            </div>
          <div className="h-8 w-8 self-center rounded-full bg-slate-200 p-1 text-white hover:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-full w-full"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
