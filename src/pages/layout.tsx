import { ReactNode } from "react";
import Navbar from "./components/Navbar.component";
import { BottomNavigationItems } from "./components/BottomNavigationItems";
import Link from "next/link";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="container mx-auto grid h-full max-w-5xl flex-1 grid-cols-12 px-5">
          <div className="col-span-12 h-full md:col-span-8">{children}</div>
          <div className="hidden border-l border-gray-200 md:col-span-4 md:flex">
            <div className="flex h-full flex-col">
              <div className="flex-1"></div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 px-5 py-5 text-xs text-gray-600">
                {BottomNavigationItems.map(({ href, name }) => (
                  <Link key={name} href={href} className="hover:underline">
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
