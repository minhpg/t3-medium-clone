import { MediumLogoShort } from "@/pages/components/MediumLogo.component";
import { useSessionContext } from "../contexts/Session.context";
import UserProfileMenu from "./UserProfileMenu.component";
import { useAuthModalContext } from "../contexts/AuthModal.context";

export default function Navbar() {
  const { session } = useSessionContext();
  const { triggerSignIn, triggerSignUp } = useAuthModalContext();
  return (
    <nav className="w-full bg-white shadow">
      <div
        className={`flex w-full ${session ? "justify-center" : "justify-between"} border-b border-gray-200 px-2 py-2 md:hidden`}
      >
        <a className={`px-2 py-1 text-xs font-light text-gray-600`}>
          <button className="flex gap-1">
            Open in app{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3 w-3 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </a>
        {!session && (
          <div className="flex gap-1 text-xs font-light text-gray-600">
            <a
              className="rounded-3xl bg-green-700 px-2 py-1 text-white hover:bg-green-800"
              onClick={triggerSignUp}
            >
              <button className="self-center">Sign up</button>
            </a>
            <a className="px-2 py-1 hover:text-black" onClick={triggerSignIn}>
              <button>Sign in</button>
            </a>
          </div>
        )}
      </div>
      <div className="flex w-full justify-between px-5 py-2">
        <div className="flex justify-start gap-5 self-center">
          <MediumLogoShort className="self-center" />
          <div className="hidden gap-2 rounded-3xl bg-gray-100 p-2 text-sm font-light text-gray-500 sm:flex">
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
              className="self-center bg-gray-100 text-gray-500 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-3 text-sm font-light text-gray-500">
          <a className="hidden gap-1 px-3 py-2 hover:text-black sm:flex">
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
          {!session && (
            <>
              <a
                className="hidden rounded-3xl bg-green-700 px-3 py-2 text-white hover:bg-green-800 md:flex"
                onClick={triggerSignUp}
              >
                <button className="self-center">Sign up</button>
              </a>
              <a
                className="-ml-2 hidden px-3 py-2 hover:text-black md:flex"
                onClick={triggerSignIn}
              >
                <button>Sign in</button>
              </a>
            </>
          )}
          <div className="flex gap-2 rounded-3xl p-2 text-sm font-light text-gray-500 sm:hidden">
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
          <UserProfileMenu>
            {session?.user ? (
              <img
                src={session.user.image?.toString()}
                className="h-8 w-8 self-center rounded-full"
              />
            ) : (
              <div className="h-8 w-8 self-center rounded-full bg-gray-200 p-1 text-white hover:bg-gray-300">
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
            )}
          </UserProfileMenu>
        </div>
      </div>
    </nav>
  );
}
