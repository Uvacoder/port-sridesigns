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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="md:mt-16">
        <header className="h-80 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-center font-bold pb-5">Projects</h1>
          <p className="text-xl font-medium text-center max-w-2xl mx-auto">A catalogue of select works, side projects, and experiments.</p>
        </header>

        <div className="max-w-screen-sm lg:max-w-4xl mx-6 md:mx-auto">

          {/* Selected works section */}

          <h3 className="text-3xl font-bold mb-8">Selected Works</h3>
          <SelectedWorks projects={projects} />

          {/* Side projects section */}

          <div className="my-16">
            <h3 className="text-3xl font-bold mb-8">Side Projects</h3>
            <SideProjectsList sideprojects={sideprojects} />
          </div>


        </div>

      </main>
      <Footer />

    </Layout>
  )
}