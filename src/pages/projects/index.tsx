import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SelectedWorks from "../../components/SelectedWorks";
import { GetCaseStudies } from "../../graphql/data/projects/casestudies";

interface Props {
  slug: string
  caseStudies: {
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
  }
}


export async function getStaticProps() {
  const projects = await GetCaseStudies()

  return {
    //This data is a little dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      projects
    },
  }
}

export default function Projects({ projects }: Props) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <header className="h-80 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-center font-bold pb-5">Projects</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">A catalogue of select works, side projects, and experiments.</p>
        </header>

        <div className="max-w-screen-sm md:max-w-xl lg:max-w-3xl mx-auto my-12">

          {/* Selected works section */}

          <h3 className="text-3xl font-bold mb-8">Selected Works</h3>
          <div className="lg:grid grid-cols-2 gap-6 mx-auto">
            {projects?.caseStudies?.map((project) => (
              <div key={project.slug} className="space-y-2">
                <Link href={`/projects/${project.slug}`}>
                  <a>
                    <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                  </a>
                </Link>
                <p className="text-lg font-normal text-gray-700">{project.summary}</p>
              </div>
            ))}
          </div>

          {/* Side projects section */}

          <div className="my-16">
            <h3 className="text-3xl font-bold mb-8">Side Projects</h3>
          </div>


        </div>
      </main>
      <Footer />

    </Layout>
  )
}