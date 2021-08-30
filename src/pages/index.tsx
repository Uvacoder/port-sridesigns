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
            <h1 className="text-6xl font-bold text-center pb-5">👋 Hello, I&apos;m Sriram.</h1>
            <p className="text-xl font-medium text-center max-w-screen lg:max-w-3xl mx-auto">Hello There! I’m a product designer @&nbsp;
              <Link href="https://www.tcs.com/">
                <a className="underline hover:text-white font-semibold" target="_blank" rel="noopener noreferrer">Tata Consultancy Services</a>
              </Link>
              &nbsp;based in Chennai. I’ve been working in tech since 2011 and I’m designing products and experiences since 2015.</p>
            <HomeButton />

          </header>
          <div className="bg-gray-900 flex items-center justify-center">
            <HomeSocial />
          </div>

          {/* Case Studies Section */}
          <div className="my-16" id="casestudies">
            <h2 className="max-w-screen lg:max-w-3xl text-3xl font-bold mx-auto text-center pb-2">Case Studies</h2>
            <p className="text-lg font-medium text-center max-w-screen lg:max-w-3xl mx-auto">Detailed documentation of my works.</p>
            <HomeWork home={home} />
          </div>

          {/* Side Projects Section */}
          <div className="my-16">
            <h2 className="max-w-screen lg:max-w-3xl text-3xl font-bold mx-auto text-center pb-2">Side Projects</h2>
            <p className="text-lg font-medium text-center max-w-screen lg:max-w-3xl mx-auto">My unofficial works, hobbies and experiments.</p>
            <HomeSideProject home={home} />
          </div>

          {/* Blogs Section */}
          <div className="my-16">
            <h2 className="max-w-screen lg:max-w-3xl text-3xl font-bold mx-auto text-center pb-2">Recent Writing</h2>
            <p className="text-lg font-medium text-center max-w-screen lg:max-w-3xl mx-auto">Latest posts from my blog!</p>
            <HomeBlogList home={home} />
          </div>

        </main>
        <h1>Welcome to my portfolio!</h1>

      </Layout>

    </div>
  )
}

