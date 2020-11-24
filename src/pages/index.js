import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import ProjectSlider from '../components/ProjectSlider';




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
      <ProjectSlider/>
      <Form/>
      <Footer/>
    </>
  )
}
