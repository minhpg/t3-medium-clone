import TrendingGridItem from "./TrendingGridItem.component";

export default function TrendingGrid() {
  return (
    <div className="px-5 py-10 lg:container md:px-10 md:px-10 lg:mx-auto lg:max-w-7xl">
      <div className="text-md flex gap-2 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
        <span className="self-center">Trending on Medium</span>
      </div>
      <div className="mt-6 grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Array(6).fill(null).map((_, index) => (
          <TrendingGridItem index={index+1} key={index}/>
        ))}
      </div>
    </div>
  );
}
