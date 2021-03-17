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
      <title>Home | augustoleite.com</title>
        <meta
          name="description"
          content="Portoflio de Augusto Leite - Desenvolvedor Fullstack  realizado com NodeJS"
        />
        <meta name="theme-color" content="#5390D9" />
        <link rel="canonical" href="http://augustoleite.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ico/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5390D9" />
        <meta name="msapplication-TileColor" content="#5390D9" />
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
