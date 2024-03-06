import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

import { api } from "@/utils/api";
import RecentArticalList from "./components/RecentArticleList.component";
import HomeTopSection from "./components/HomeTopSection.component";
import TrendingGrid from "./components/TrendingGrid.component";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "@/server/auth";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTopSection />
      <div className="mb-10">
        <div className="border-b border-gray-200">
          <TrendingGrid />
        </div>
        <RecentArticalList />
      </div>
    </>
  );
}
