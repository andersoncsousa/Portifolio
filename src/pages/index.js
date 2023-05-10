import About from '@/Components/About/About';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CS Tech</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
