export default function ArticleAuthorDetails() {
  return (
    <div className="flex gap-2 py-2">
      <div className="h-5 w-5 rounded-xl bg-slate-300"></div>
      <div className="self-center text-xs font-semibold">
        <div className="group relative inline-block">
          <a className="hover:underline">Markus Stoll</a>
          <div className="absolute left-20 top-2 w-80 scale-0 rounded rounded bg-white p-5 font-normal shadow-xl group-hover:scale-100">
            <div className="flex justify-start gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-200 p-1 text-white">
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
              <div className="self-center text-lg font-semibold">
                Markus Stoll
              </div>
            </div>
            <div className="text-md mt-3">
              CTO, Co-Founder at Renumics | 🤖 unstructured ML data | 📊
              interactive ML data visualization | 🔍 ML data exploration{" "}
            </div>
            <div className="mt-3 flex justify-between border-t border-slate-200 pt-3">
              <div className="self-center text-slate-500">1.4K followers</div>
              <a className="rounded-3xl bg-green-500 px-3 py-1 text-white">
                Follow
              </a>
            </div>
          </div>
        </div>{" "}
        <span className="text-slate-500">in</span>{" "}
        <a className="hover:underline">Towards Data Science</a>
      </div>
    </div>
  );
}
