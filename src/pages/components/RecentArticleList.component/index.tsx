import RecentArticalListItem from "./RecentArticalListItem.component";

export default function RecentArticalList() {
  return (
    <div className="mt-10 px-5 lg:container md:px-10 md:px-10 lg:mx-auto lg:max-w-7xl">
      <div className="grid grid-cols-12 gap-5 lg:gap-10 w-full">
        <div className="col-span-12 flex flex-col gap-10 md:col-span-8">
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
          <RecentArticalListItem />
        </div>
        <div className="self-start sticky top-32 order-first col-span-12 md:order-last md:col-span-4">
          <div className="font-semibold">
            Discover more of what matters to you
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-sm font-light text-black">
            <a className="rounded-3xl bg-slate-100 p-3">Programming</a>
            <a className="rounded-3xl bg-slate-100 p-3">Data Science</a>
            <a className="rounded-3xl bg-slate-100 p-3">Machine Learning</a>
            <a className="rounded-3xl bg-slate-100 p-3">Technology</a>
            <a className="rounded-3xl bg-slate-100 p-3">Self Improvement</a>
            <a className="rounded-3xl bg-slate-100 p-3">Writing</a>
            <a className="rounded-3xl bg-slate-100 p-3">Relationships</a>
            <a className="rounded-3xl bg-slate-100 p-3">Productivity</a>
            <a className="rounded-3xl bg-slate-100 p-3">Politics</a>
          </div>
          <div className="border-b border-slate-200 py-5">
            <a className="text-sm text-green-600 hover:underline">
              See more topics
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-light text-slate-500">
            <a className="hover:underline">Help</a>
            <a className="hover:underline">Status</a>
            <a className="hover:underline">About</a>
            <a className="hover:underline">Careers</a>
            <a className="hover:underline">Blog</a>
            <a className="hover:underline">Privacy</a>
            <a className="hover:underline">Terms</a>
            <a className="hover:underline">Text to speech</a>
            <a className="hover:underline">Teams</a>
          </div>
        </div>
      </div>
    </div>
  );
}
