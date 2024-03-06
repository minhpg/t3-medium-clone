import { useState } from "react";

export default function SubscribeBanner() {
  const [show, setShow] = useState(true);

  if (!show) return;
  return (
    <div className="relative hidden bg-slate-100 sm:block">
      <div className="w-full justify-between px-5 py-2 text-center text-sm font-light">
        Get unlimited access for a discounted price!{" "}
        <a className="font-normal underline">Details</a>
      </div>
      <div className="absolute right-5 top-0 flex h-full">
        <button className="self-center" onClick={() => setShow(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
