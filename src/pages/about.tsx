import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function About() {

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <header className="bg-yellow-400 h-96 flex items-center">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 text-center">
              <h1 className="text-7xl font-bold tracking-tighter">வணக்கம்.</h1>
              <p className="text-lg font-medium">Sharing my thoughts on user experience, product design,
                art and tech.</p>
            </div>
          </div>
        </header>
      </main>
      <Footer />

    </Layout>
  )
}