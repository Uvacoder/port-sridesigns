import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import HomeSocial from '../components/Home/Social'
import { GetHome } from '../graphql/data/home'
import HomeWork from '../components/Home/CaseStudies'
import HomeSideProject from '../components/Home/SideProjects'
import HomeBlogList from '../components/Home/Blogs'
import HomeButton from '../components/Home/Button'
import HomeFooter from '../components/Home/Footer'

interface Props {
  home: string,
}

export async function getStaticProps() {
  const home = await GetHome()

  return {
    props: {
      home
    },
  };
}

export default function Home({ home }: Props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
          <meta name="description" content="Personal website of Sriram Venugopal" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>
          <header className="bg-clearsky flex flex-col items-center justify-center h-3/5 py-28">
            <h1 className="text-6xl font-bold text-center pb-5 text-black">👋 Hello, I&apos;m Sriram.</h1>
            <p className="text-xl font-medium text-center max-w-screen lg:max-w-3xl mx-auto text-black">Hello There! I’m a product designer @&nbsp;
              <Link href="https://www.tcs.com/">
                <a className="underline hover:text-white font-semibold" target="_blank" rel="noopener noreferrer">Tata Consultancy Services</a>
              </Link>
              &nbsp;based in Chennai. I’ve been working in tech since 2011 and I’m designing products and experiences since 2015.</p>
            <HomeButton />

          </header>
          <div className="bg-black flex items-center justify-center">
            <HomeSocial />
          </div>

          {/* Case Studies Section */}
          <div className="my-16" id="casestudies">
            <h2 className="max-w-screen lg:max-w-4xl text-3xl mx-auto text-center font-bold pb-2">Case Studies</h2>
            <HomeWork home={home} />
          </div>

          {/* Side Projects Section */}
          <div className="my-16" >
            <HomeSideProject home={home} />
          </div>

          {/* Blogs Section */}
          <div className="mt-16 bg-clearsky h-3/5 py-20">
            <div className="flex flex-row items-center justify-between max-w-screen lg:max-w-3xl py-4 mx-auto">
              <h2 className="text-3xl font-bold text-black">Recent Writing</h2>
              <Link href="/writing">
                <a>
                  <button className="bg-black text-white border-4 font-bold text-lg px-4 py-2 border-black hover:bg-white hover:text-black transition duration-300 ease-linear">View all posts&nbsp;&nbsp;✍️</button>
                </a>
              </Link>
            </div>
            <HomeBlogList home={home} />
          </div>

        </main>
        <HomeFooter />


      </Layout>

    </div>
  )
}

