import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { GetSideProject, GetSideProjectSlug } from "../../graphql/data/sideprojects/sproject"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

interface Props {
  slug: string
  source: MDXRemoteSerializeResult
}

export async function getStaticPaths() {
  const slugRes = await GetSideProjectSlug()
  const slugs = slugRes.sideProjects

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const work = await GetSideProject(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      sideproject: work.sideProjects[0],
      source: await serialize(work.sideProjects[0].body.markdown)
    },
  }
}

export default function SideProjectView({ sideproject, source }) {
  return (
    <Layout>
      <Head>
        <title>{sideproject.title}</title>
        <link rel="icon" href="/favicons/manlaptop.png" />
      </Head>
      <ScrollToTop />
      <Header />
      <main className="mt-20 md:mt-28">
        <header className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto space-y-4 py-10">
          <h2 className="text-4xl text-gray-900 dark:text-gray-50 font-bold text-center">{sideproject.title}</h2>
          <p className="text-lg font-medium text-center text-gray-700 dark:text-gray-400">{sideproject.summary}</p>
        </header>
        <div className="max-w-screen md:max-w-screen-md mx-auto my-5 text-center">
          <Image
            src={sideproject.coverImage.url}
            alt={sideproject.title}
            width={800}
            height={480}
            objectFit="cover"
          />
        </div>
        <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto md:grid grid-cols-3 gap-4">
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Activities</h3>
            {sideproject.activities.map((activity: string) => (
              <ul key={activity}>
                <li className="text-base py-1 list-disc list-inside">
                  {activity}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Tech Stack</h3>
            {sideproject.techStack.map((stack: string) => (
              <ul key={stack}>
                <li className="text-base py-1 list-disc list-inside">
                  {stack}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Duration</h3>
            <p className="text-base">{sideproject.duration}</p>
          </div>

        </div>


        <div className="max-w-screen-sm md:max-w-screen-md prose prose-lg dark:prose-dark text-gray-900 dark:text-gray-100 my-10 mx-6 md:mx-auto">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}