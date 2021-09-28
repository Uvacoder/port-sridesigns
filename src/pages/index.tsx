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
import HomeAppList from '../components/Home/Apps'

interface Props {
  home: string,
}

export async function getStaticProps() {
  const home = await GetHome()

  return {
    props: {
      revalidate: 60 * 60,
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
          <link rel="icon" href="/favicons/memoji.png" />
        </Head>

        <Header />
        <main>
          <header className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto pt-24 pb-16 md:py-32">
            <p className="text-6xl font-bold text-left py-5 inline-flex animate-wiggle">👋</p>
            <h1 className="text-4xl font-bold text-left leading-snug py-5">Hello, I&apos;m Sriram. I&apos;m a product designer, maker, and illustrator from Chennai.<br /> I &apos;m currently designing products &amp; experiences for&nbsp;
              <Link href="https://www.tcs.com/">
                <a className="hover:text-indigo-500 dark:hover:text-sky-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hidden md:inline-flex" target="_blank" rel="noopener noreferrer">Tata Consultancy Services.</a>
              </Link>
              <Link href="https://www.tcs.com/">
                <a className="hover:text-indigo-500 dark:hover:text-sky-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 md:hidden" target="_blank" rel="noopener noreferrer">TCS.</a>
              </Link>
            </h1>
            <p className="text-lg font-medium text-left text-gray-700 dark:text-gray-400">I design delightful consumer and enterprise applications for clients across diverse industries and geographies.</p>

            <HomeButton />

          </header>

          {/* Case Studies Section */}
          <div className="mt-16 mb-12 lg:mb-24" id="casestudies">
            <HomeWork home={home} />
          </div>

          {/* Side Projects Section */}
          <div className="my-16" >
            <HomeSideProject home={home} />
          </div>

          {/* App Exploration Section */}
          <div className="my-24" >
            <HomeAppList home={home} />
          </div>

          {/* Blogs Section */}
          <div className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto my-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Recent Writing</h2>
            <HomeBlogList home={home} />

            <Link href="/writing">
              <a>
                <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg md:inline-flex flex items-center p-0.5 hover:shadow-lg">
                  <button className="bg-white dark:bg-darkblack py-2 px-6 text-gray-900 dark:text-gray-50 hover:text-indigo-500 dark:hover:text-sky-400 font-bold text-base text-center transition duration-200 ease-linear rounded-md w-full">Read all posts&nbsp;&nbsp;✍️</button>
                </div>
              </a>
            </Link>
          </div>

        </main>
        <HomeFooter />


      </Layout>

    </div >
  )
}

