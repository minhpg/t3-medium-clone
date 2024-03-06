import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { GetServerSideProps, NextPage } from "next";
import type { AppProps } from "next/app";
import { api } from "@/utils/api";

import "@/styles/globals.css";
import { getServerAuthSession } from "@/server/auth";
import { inter } from "./fonts";
import {
  SessionContext,
  SessionContextProvider,
} from "./contexts/Session.context";
import { AuthModalContextProvider } from "./contexts/AuthModal.context";
import AuthModal from "./components/AuthModal.component";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <AuthModalContextProvider>
        <SessionContextProvider>
          <main className={`font-sans ${inter.variable}`}>
            {getLayout(<Component {...pageProps} />)}
          </main>
          <AuthModal />
        </SessionContextProvider>
      </AuthModalContextProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
