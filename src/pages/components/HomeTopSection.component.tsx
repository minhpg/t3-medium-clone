"use client";
import { useEffect, useRef, useState } from "react";
import MediumLogo from "./MediumLogo.component";
import dynamic from "next/dynamic";

const MGrid = dynamic(() => import("./MGrid.component"), { ssr: false });

export default function HomeTopSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (heroRef) {
      if (heroRef.current) {
        setHeight(heroRef.current.clientHeight);
      }
    }
  }, [heroRef]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [height]);

  const changeNavbarColor = () => {
    if (height > 0) {
      if (window.scrollY >= height - 100) {
        setIsScrollComplete(true);
      } else {
        setIsScrollComplete(false);
      }
    }
  };

  return (
    <>
      <nav
        className={`self-start sticky top-0 z-50 w-full border-b border-black p-5 transition-all duration-200 ${isScrollComplete ? `bg-white` : `bg-[#FFC017]`}`}
      >
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
            <a
              className={`rounded-3xl bg-black p-3 text-white ${isScrollComplete ? `bg-green-600` : `bg-black`}`}
            >
              <button>Get started</button>
            </a>
          </div>
        </div>
      </nav>
      <div
        className="relative border-b border-black bg-[#FFC017] px-5 py-8 md:py-10"
        ref={heroRef}
      >
        <MGrid />
        <div className="flex w-full lg:container md:px-10 lg:mx-auto lg:max-w-7xl ">
          <div className="flex h-full flex-col justify-center gap-10 py-24 bg-[#FFC017] z-20">
            <div className="font-serif text-7xl sm:text-8xl">Stay curious.</div>
            <div className="w-full text-xl leading-6 sm:w-5/6">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </div>
            <a className="w-48 rounded-3xl bg-black p-2 text-center text-xl font-light text-white">
              <button>Start reading</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
