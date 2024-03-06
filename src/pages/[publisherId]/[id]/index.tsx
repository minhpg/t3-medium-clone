import Head from "next/head";
import PostTitle from "./components/PostTitle.component";
import PostBody from "./components/PostBody.component";
import FooterNav from "./components/FooterNav.component";
import PostAuthorDetails from "./components/PostAuthorDetails.component";
import PostSocialDetails from "./components/PostSocialDetails.component";
import ArticleGridCard from "./components/ArticleGridCard.component";
import SubscribeBanner from "./components/SubscribeBanner.component";
import Navbar from "../../components/Navbar.component";

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Title - Medium</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SubscribeBanner />
      <div>
        <PostTitle />
        <PostBody paywallEnabled />
        <div className="container mx-auto my-20 max-w-3xl px-5">
          <PostSocialDetails />
        </div>
        <div className="border-b border-gray-200 bg-gray-50 py-10">
          <div className="container mx-auto max-w-3xl px-5">
            <PostAuthorDetails />
            <div className="mt-10">
              <div className="font-semibold">More from Casper Muller</div>
              <div className="mt-8 grid grid-cols-1 gap-8 border-b border-gray-200 md:grid-cols-2">
                <ArticleGridCard />
                <ArticleGridCard />
                <ArticleGridCard />
                <ArticleGridCard />
              </div>
              <div className="flex flex-col gap-5 py-5 text-center md:flex-row">
                <a className="rounded-3xl border border-black px-4 py-2 text-sm">
                  See all from Casper Muller
                </a>
                <a className="rounded-3xl border border-black px-4 py-2 text-sm">
                  See all from Cantor's Paradise
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-10">
          <div className="container mx-auto max-w-3xl px-5">
            <div>
              <div className="text-2xl font-semibold">
                Recommended from Medium
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 border-b border-gray-200 md:grid-cols-2">
                <ArticleGridCard />
                <ArticleGridCard />
                {/* <div className="col-span-1 md:col-span-2 flex py-10 gap-5 border-b border-t border-gray-200">
                <div className="font-semibold">List</div>
                <div className="grid grid-cols-1 md:grid-cols-2"></div>
              </div> */}
                <ArticleGridCard />
                <ArticleGridCard />
              </div>
              <div className="flex flex-col gap-5 py-5 text-center md:flex-row">
                <a className="rounded-3xl border border-black px-4 py-2 text-sm">
                  See more recommendations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </>
  );
}