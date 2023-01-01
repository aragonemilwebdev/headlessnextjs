import "../styles/globals.css"; 
import client from "../lib/apollo-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Head from "next/head";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Headdless WP + Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}
