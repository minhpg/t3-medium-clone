import { ReactNode } from "react";
import MediumLogo from "./MediumLogo.component";

export default function HomeNavbar(): ReactNode {
  return (
    <nav className="sticky w-full border-b border-black bg-[#FFC017] bg-transparent p-5">
      <div className="flex w-full justify-between lg:container md:px-10 lg:mx-auto lg:max-w-7xl">
        <MediumLogo className="w-40 self-center" />
        <div className="flex gap-3 text-sm font-light">
          <a className="hidden p-3 md:flex">
            <button>Our story</button>
          </a>
          <a className="hidden p-3 md:flex">
            <button>Membership</button>
          </a>
          <a className="hidden p-3 md:flex">
            <button>Write</button>
          </a>
          <a className="hidden p-3 sm:flex">
            <button>Sign in</button>
          </a>
          <a className="rounded-3xl bg-black p-3 text-white">
            <button>Get started</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
