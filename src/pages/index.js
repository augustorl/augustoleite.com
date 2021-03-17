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
        crossOrigin="anonymous"
        as="font"
        type="font/woff2"   
      />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
      <title>Home | augustoleite.com</title>
        <meta
          name="description"
          content="Portoflio de Augusto Leite - Desenvolvedor Fullstack  realizado com NodeJS"
        />
        <meta name="theme-color" content="#5390D9" />
        <link rel="canonical" href="http://augustoleite.com" />
        <link rel="apple-touch-icon" sizes="57x57" href="ico/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="ico/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="ico/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="ico/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="ico/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="ico/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="ico/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="ico/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="ico/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="ico/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="ico/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="ico/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="ico/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileImage" content="ico/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#5390D9"/>
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
