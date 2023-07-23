import Head from 'next/head'
import Header from '@components/header/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to GrovNest" />
        <p className="description">
          Get started 
        </p>
      </main>

      <Footer />
    </div>
  )
}
