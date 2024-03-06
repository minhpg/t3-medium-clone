import Link from "next/link";
import ArticleAuthorDetails from "../ArticleAuthorDetails.component";

export interface TrendingGridItemProps {
  index: number;
}

export default function TrendingGridItem({ index }: TrendingGridItemProps) {
  return (
    <div className="flex gap-5">
      <div className="text-3xl font-bold text-gray-400 opacity-25">
        0{index}
      </div>
      <div>
        <ArticleAuthorDetails />
        <Link href="/story/test" className="text-md mt-1 text-wrap font-bold leading-5 hover:underline">
          Visualize your RAG Data — Evaluate your Retrieval-Augmented Generation
          System
        </Link>
        <div className="mt-2 flex gap-3">
          <div className="text-xs font-light text-gray-600">
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
      </div>
    </div>
  );
}
