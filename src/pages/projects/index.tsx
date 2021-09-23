import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SelectedWorks from "../../components/SelectedWorks";
import { GetCaseStudies } from "../../graphql/data/projects/casestudies";
import SideProjectsList from "../../components/SideProjectsList";
import { GetSideProjects } from "../../graphql/data/sideprojects/sprojects";

interface Props {
  slug: string
  projects: {
    id: string
    title: string
    publishedAt: string
    summary: string
    bannerImage: {
      url: string
      width: number
      height: number
    }
  }
  sideprojects: {
    title: string
    publishedAt: string
    summary: string
  }
}

export async function getStaticProps() {
  const projects = await GetCaseStudies()
  const sideprojects = await GetSideProjects()

  return {
    //This data is a little dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      projects,
      sideprojects
    },
  }
}

export default function Projects({ projects, sideprojects }: Props) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicons/manlaptop.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto">
        <header className="pt-32 pb-24 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Projects</h1>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-500">A catalogue of select works, side projects, and experiments.</p>
        </header>

        {/* Selected works section */}

        <h3 className="text-2xl font-bold mb-8">Selected Works</h3>
        <SelectedWorks projects={projects} />

        {/* Side projects section */}

        <div className="my-16">
          <h3 className="text-2xl font-bold mb-8">Side Projects</h3>
          <SideProjectsList sideprojects={sideprojects} />
        </div>

      </main>

      <Footer />


    </Layout>
  )
}