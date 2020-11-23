import Head from "next/head";
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
      <link
        rel="preload"
        href="/fonts/EksellDisplayWeb/EksellDisplayWeb-Stencil.woff2"
        as="font"
        crossOrigin=""
      />
      </Head>
      <Header/>
    </>
  )
}
