import { ReactNode } from "react";

export default function Hero(): ReactNode {
  return (
    <div className="border-b border-black bg-[#FFC017] p-5 pt-10">
      <div className="flex w-full lg:container md:px-10 lg:mx-auto lg:max-w-7xl">
        <div className="my-16 flex h-full flex-col justify-center gap-10">
          <div className="font-serif text-7xl sm:text-8xl">Stay curious.</div>
          <div className="w-full text-xl leading-6 sm:w-5/6">
            Discover stories, thinking, and expertise from writers on any topic.
          </div>
          <a className="w-48 rounded-3xl bg-black p-2 text-center text-xl font-light text-white">
            <button>Start reading</button>
          </a>
        </div>
      </div>
    </div>
  );
}
