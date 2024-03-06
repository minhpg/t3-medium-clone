export default function PostAuthorDetails() {
  return (
    <div className="py-10 border-b border-gray-200">
      <div className="flex justify-between">
        <div className="relative h-20 w-20 rounded-full bg-black">
          <div className="absolute -right-5 top-10 h-10 w-10 rounded-full border-2 border-white bg-gray-500"></div>
        </div>
        <div className="self-end md:hidden">
          <div className="flex gap-3 text-sm text-white">
            <a className="rounded-3xl bg-gray-500 hover:bg-gray-600 p-3">Follow</a>
            <a className="rounded-3xl bg-gray-500 hover:bg-gray-600 p-3">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div>
          <div className="text-xl font-semibold">
            Written by Aspiring Reader
          </div>
          <div className="text-sm font-light text-gray-500">
            <span className="text-black">51K followers</span> · Editor for{" "}
            <a className="text-black hover:underline">Hooked on Books</a>
          </div>
          <div className="mt-5 text-sm">
            Mathematician, programmer and writer interested in the mysteries of
            the Universe, fascinated by the human mind, music and things that I
            don’t understand.
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3 text-sm text-white">
            <a className="rounded-3xl bg-gray-500 hover:bg-gray-600 p-3">Follow</a>
            <a className="rounded-3xl bg-gray-500 hover:bg-gray-600 p-3">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
