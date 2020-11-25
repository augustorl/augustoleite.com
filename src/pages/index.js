import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Projects from '../components/Projects';




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
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <Projects/>
      <Form/>
      <Footer/>
    </>
  )
}
