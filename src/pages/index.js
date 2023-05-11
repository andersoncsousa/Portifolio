import About from '@/Components/About/About';
import BtnBack from '@/Components/BtnBack/BtnBack';
import Contact from '@/Components/Contact/Contact';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Project from '@/Components/Project/Project';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CS Tech</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <BtnBack />
      <main>
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
