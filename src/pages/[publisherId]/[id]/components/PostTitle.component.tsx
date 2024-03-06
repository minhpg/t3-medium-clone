import PostSocialDetails from "./PostSocialDetails.component";

export default function PostTitle() {
  return (
    <div className="container mx-auto max-w-3xl px-5">
      <div className="mt-10 flex gap-1 text-sm font-light text-gray-500">
        <div className="self-center text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
          </svg>
        </div>
        Members only story
      </div>
      <div className="mt-7">
        <h1 className="text-4xl font-bold">The Origins of Dune</h1>
        <p className="mt-2 text-xl text-gray-500">
          Before you watch part 2 of Dune, learn about the inspirations and
          origins of Frank Herbert’s classic SciFi novel
        </p>
      </div>
      <div className="mt-7">
        <div className="flex gap-8">
          <div className="relative h-12 w-12 rounded-full bg-black">
            <div className="absolute left-9 top-5 h-8 w-8 rounded-full border-2 border-white bg-gray-500"></div>
          </div>
          <div>
            <div>
              Aspiring Reader · <a className="text-green-600">Follow</a>
            </div>
            <div className="text-sm font-light text-gray-500">
              Published in{" "}
              <a className="text-black hover:underline">Hooked on Books</a>
            </div>
            <div className="text-sm font-light text-gray-500">
              10 min read · Feb 24, 2024
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-b border-t border-gray-200">
        <PostSocialDetails />
      </div>
    </div>
  );
}
