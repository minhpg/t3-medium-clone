import { Popover } from "@headlessui/react";
import { signOut } from "next-auth/react";
import type { ReactNode } from "react";
import { useSessionContext } from "../contexts/Session.context";
import { BottomNavigationItems } from "./BottomNavigationItems";
import Link from "next/link";
import { useAuthModalContext } from "../contexts/AuthModal.context";
import emailTruncate from "@/utils/emailTruncate";

export interface UserProfileMenuProps {
  children: ReactNode;
}

export default function UserProfileMenu({ children }: UserProfileMenuProps) {
  const { session } = useSessionContext();
  const { triggerSignIn, triggerSignUp } = useAuthModalContext();

  const subMenuItems = [
    {
      href: "/me/settings",
      name: "Settings",
    },
    {
      href: "/me/recommendations",
      name: "Refine recommendations",
    },
    {
      href: "/me/publications",
      name: "Manage publications",
    },
    {
      href: "/help",
      name: "Help",
    },
  ];

  return (
    <Popover className="relative">
      <Popover.Button className={`h-full outline-none`}>
        {children}
      </Popover.Button>

      <Popover.Panel className="absolute right-0 z-50 w-64 bg-white shadow-2xl shadow-inner">
        {session && (
          <>
            <div className="flex flex-col border-b border-gray-200 px-3 py-5 text-black">
              <Link
                className="flex gap-3 border-b border-gray-200 px-3 py-5 opacity-60 hover:opacity-100 sm:hidden"
                href="/new-story"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span className="self-center">Write</span>
              </Link>
              <Link
                className="flex gap-3 p-3 opacity-60 hover:opacity-100"
                href="/me"
              >
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span className="self-center">Profile</span>
              </Link>
              <Link
                className="flex gap-3 p-3 opacity-60 hover:opacity-100"
                href="/me/libraries"
              >
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
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>

                <span className="self-center">Libraries</span>
              </Link>
              <Link
                className="flex gap-3 p-3 opacity-60 hover:opacity-100"
                href="/me/stories"
              >
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
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>

                <span className="self-center">Stories</span>
              </Link>
            </div>
            <div className="flex flex-col border-b border-gray-200 px-3 py-5 text-black">
              {subMenuItems.map(({ href, name }) => (
                <Link className="px-3 py-1 opacity-60 hover:opacity-100" href={href} key={name}>
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col px-3 py-5 text-black">
              <a
                className="px-4 py-1 opacity-60 hover:text-red-600 hover:opacity-100"
                onClick={() => signOut()}
              >
                Sign out
              </a>
              <div className="px-4 pb-2 opacity-60">
                {emailTruncate(session.user.email)}
              </div>
            </div>
          </>
        )}
        {!session && (
          <>
            <div className="flex flex-col gap-3 border-b border-gray-200 p-8 text-center text-black">
              <div className="mb-4 font-semibold">Get started on Medium</div>
              <div
                className="rounded-3xl bg-green-700 p-1 text-sm text-white"
                onClick={triggerSignUp}
              >
                Sign up
              </div>
              <div
                className="rounded-3xl border border-black p-1 text-sm"
                onClick={triggerSignIn}
              >
                Sign in
              </div>
            </div>
            <div className="flex flex-col p-3 text-black sm:hidden">
              <a
                className="flex gap-3 px-3 py-5 opacity-60 hover:opacity-100"
                href="/analytics"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span className="self-center">Write</span>
              </a>
            </div>
          </>
        )}
        <div className="bg-gray-100">
          <div className="flex scale-90 flex-wrap gap-x-2 gap-y-1 p-3 text-xs text-gray-600 md:hidden">
            {BottomNavigationItems.map(({ href, name }) => (
              <Link key={name} href={href} className="hover:underline">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
