import Head from "next/head";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Contact from "@components/contact/Contact";
import Navbar from "@components/navbar/Navbar";
import About from "@components/about/About";
import Faq from "@components/faq/Faq";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
    
     <Navbar />
      
      <main>
      <img src="/aaa.png" alt="" />
          {/* <About/> */}
          {/* <Faq/> */}
      </main>
      
      {/* <Contact/> */}
     
      <Footer />
    </div>
  );
}
