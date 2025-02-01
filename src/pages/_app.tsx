import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RequestLayout from "./layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RequestLayout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RequestLayout>
  );
}
