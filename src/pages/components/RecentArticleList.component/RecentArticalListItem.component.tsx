import Image from "next/image";
import ArticleAuthorDetails from "../ArticleAuthorDetails.component";
import Link from "next/link";

export default function RecentArticalListItem() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-4">
          <ArticleAuthorDetails />
          <Link
            href="/posts/test"
            className="mt-1 text-lg font-bold hover:underline"
          >
            The Origins Of Dune
          </Link>
          <div className="mt-1 text-sm font-light text-slate-500">
            Before you watch part 2 of Dune, learn about the inspirations and
            origins of Frank Herbert’s classic SciFi novel
          </div>
          <div className="space-between mt-2 flex gap-3">
            <div className="flex w-full gap-3">
              <div className="text-xs font-light text-slate-600">
                Mar 3, 2024 · 12 min read
              </div>
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
                </svg>
              </div>
            </div>
            <div className="self-center">
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <Image
            width={160}
            height={90}
            src="/mock_img.jpeg"
            className="h-full self-center"
            alt="image"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
