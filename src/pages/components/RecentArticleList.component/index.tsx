import Link from "next/link";
import { BottomNavigationItems } from "../BottomNavigationItems";
import RecentArticalListItem from "./RecentArticalListItem.component";

export default function RecentArticalList() {
  return (
    <div className="mt-10 px-5 lg:container md:px-10 md:px-10 lg:mx-auto lg:max-w-7xl">
      <div className="grid w-full grid-cols-12 gap-5 lg:gap-10">
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
        <div className="order-first col-span-12 md:sticky md:top-28 md:order-last md:col-span-4 md:self-start">
          <div className="font-semibold">
            Discover more of what matters to you
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-sm font-light text-black">
            <a className="rounded-3xl bg-gray-100 p-3">Programming</a>
            <a className="rounded-3xl bg-gray-100 p-3">Data Science</a>
            <a className="rounded-3xl bg-gray-100 p-3">Machine Learning</a>
            <a className="rounded-3xl bg-gray-100 p-3">Technology</a>
            <a className="rounded-3xl bg-gray-100 p-3">Self Improvement</a>
            <a className="rounded-3xl bg-gray-100 p-3">Writing</a>
            <a className="rounded-3xl bg-gray-100 p-3">Relationships</a>
            <a className="rounded-3xl bg-gray-100 p-3">Productivity</a>
            <a className="rounded-3xl bg-gray-100 p-3">Politics</a>
          </div>
          <div className="border-b border-gray-200 py-5">
            <a className="text-sm text-green-600 hover:underline">
              See more topics
            </a>
          </div>
          <div className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 text-sm font-light text-gray-500 md:flex">
            {BottomNavigationItems.map(({ href, name }) => (
              <Link key={name} href={href} className="hover:underline">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
