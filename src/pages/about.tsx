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
      <main className="lg:mt-14">
        <header className="bg-yellow-400 h-3/5 py-20 flex items-center bg-hideout bg-repeat">
          <div className="max-w-screen md:max-w-screen-md lg:max-w-screen-lg mx-6 md:mx-auto lg:grid grid-cols-3 gap-6">
            <div className="space-y-4 col-span-2 lg:px-6">
              <h1 className="text-7xl font-bold tracking-tighter text-left">வணக்கம்.</h1>
              <p className="text-lg font-medium text-left pb-6 leading-relaxed">I&apos;m a product designer based out of Chennai 🇮🇳. <br /> I&apos;m working with&nbsp;
                <Link href="https://www.tcs.com/">
                  <a className="underline hover:text-blue-800 font-semibold" target="_blank" rel="noopener noreferrer">TCS</a>
                </Link>&nbsp;since 2011 and currently part of the &quot;Digital Workplace&quot; business unit.</p>
              <Link href="https://drive.google.com/file/d/1bzjQ13Z0JoyGdDPTlDz5MvbK25wYlG2_/view?usp=sharing">
                <a>
                  <button className="bg-gray-900 py-2 px-8 border-4 border-gray-900 text-white hover:bg-white hover:text-gray-900 font-bold text-lg transition duration-200 ease-linear">View my resume&nbsp;&nbsp;📜</button>
                </a>
              </Link>
            </div>
            <div className="mt-8 lg:mt-0">
              <Image
                src={profilePic}
                alt="This is Meee!"
                width={225}
                height={225}
                objectFit="contain"
              />
            </div>

          </div>
        </header>
        <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto py-10 space-y-8">
          <div>
            <p className="text-lg font-medium pb-4">Apart from creating in-house products, we collaborate with global clients to <em className="font-semibold italic text-gray-800">&lsquo;create seamless and cohesive employee experiences&rsquo;</em> across enterprise applications.</p>
            <Link href="https://www.tcs.com/reimagining-research/the-digital-workplace">
              <a className="text-indigo-600 font-semibold hover:underline hover:text-indigo-400 text-lg" target="_blank" rel="noopener noreferrer">Read more about Digital Workplace</a>
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">A little about me</h3>
            <ul className="text-lg font-medium space-y-4 list-disc list-outside px-4 leading-loose pb-4">
              <li className="">I completed my Bachelor&apos;s degree in Engineering in 2011 and joined TCS the same year. I started my career as a developer using Java, Unix, HTML & CSS for a global marketing and data research client.
              </li>
              <li>After 2 years as a developer, I worked as an Analyst, mainly facilitating stakeholder discussions and conducting user research for a retail banking app of a large multinational banking and financial organization.
              </li>
              <li>Our team partnered with an external design agency and it is here that I had my first exposure to design as a profession.
              </li>
              <li>I made the transition to design in 2015 and is fortunate enough to work on a diverse portfolio of products with diverse clients across different industries and geographies.
              </li>
            </ul>
            <h3 className="text-xl font-bold">Some of my featured works...</h3>
            <div className="inline-flex space-x-4">
              <Link href="https://www.tcs.com/reimagining-research/the-digital-workplace">
                <a className="text-indigo-600 font-semibold hover:underline hover:text-indigo-400 text-lg" target="_blank" rel="noopener noreferrer">Fresco: Reimagining the Workplace</a>
              </Link>
              <p className="text-gray-400 hidden md:block">|</p>
              <Link href="https://www.tcs.com/reimagining-research/the-digital-workplace">
                <a className="text-indigo-600 font-semibold hover:underline hover:text-indigo-400 text-lg" target="_blank" rel="noopener noreferrer">O365 Onboarding Self Service Portal</a>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">A little about me</h3>
            <ul className="text-lg font-medium space-y-4 list-disc list-outside px-4 leading-loose pb-4">
              <li className="">I completed my Bachelor&apos;s degree in Engineering in 2011 and joined TCS the same year. I started my career as a developer using Java, Unix, HTML & CSS for a global marketing and data research client.
              </li>
              <li>After 2 years as a developer, I worked as an Analyst, mainly facilitating stakeholder discussions and conducting user research for a retail banking app of a large multinational banking and financial organization.
              </li>
              <li>Our team partnered with an external design agency and it is here that I had my first exposure to design as a profession.
              </li>
              <li>I made the transition to design in 2015 and is fortunate enough to work on a diverse portfolio of products with diverse clients across different industries and geographies.
              </li>
            </ul>

          </div>
        </div>
      </main>
      <Footer />

    </Layout>
  )
}