import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePic from "../assets/profilePic.png"


export default function About() {

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <header className="bg-yellow-400 h-96 flex items-center mx-auto">
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 items-center">
            <div className="space-y-4 text-center col-span-2">
              <h1 className="text-7xl font-bold tracking-tighter text-left">வணக்கம்.</h1>
              <p className="text-lg font-medium text-left">Sharing my thoughts on user experience, product design,
                art and tech.</p>
            </div>
            <Image
              src={profilePic}
              alt="This is Meee!"
              width={225}
              height={225}
              objectFit="contain"
            />
          </div>
        </header>
      </main>
      <Footer />

    </Layout>
  )
}