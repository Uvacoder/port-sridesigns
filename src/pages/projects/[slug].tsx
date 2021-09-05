import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { GetCaseStudy, GetCaseStudySlug } from "../../graphql/data/projects/casestudy"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

interface Props {
  slug: string
  casestudy: {
    id: string
    title: string
    summary: string
    publishedAt: string
    bannerImage: {
      url: string
      width: number
      height: number
    }
    content: {
      json: string
      markdown: string
    }
    role: string
    techStack: string
    duration: string
  }
  source: MDXRemoteSerializeResult
}

export async function getStaticPaths() {
  const slugRes = await GetCaseStudySlug()
  const slugs = slugRes.caseStudies

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const work = await GetCaseStudy(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      casestudy: work.caseStudies[0],
      source: await serialize(work.caseStudies[0].content.markdown)
    },
  }
}

export default function CaseStudyView({ casestudy, source }: Props) {
  return (
    <Layout>
      <Head>
        <title>{casestudy.title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ScrollToTop />
      <Header />
      <main className="md:mt-28">
        <header className="flex-col mt-12 mb-10 space-y-4 justify-center">
          <h2 className="text-5xl text-gray-800 font-bold text-center">{casestudy.title}</h2>
          <p className="text-lg  font-medium text-center text-gray-700 max-w-2xl mx-auto">{casestudy.summary}</p>
        </header>
        <div className="max-w-3xl mx-auto my-5 text-center">
          <Image
            src={casestudy.bannerImage.url}
            alt={casestudy.title}
            width={800}
            height={480}
            objectFit="cover"
          />
        </div>
        <div className="max-w-3xl mx-auto lg:grid grid-cols-3 gap-6">
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Activities</h3>
            {casestudy.role.map((activity: string) => (
              <ul key={activity}>
                <li className="text-base py-1 list-disc list-inside">
                  {activity}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Tech Stack</h3>
            {casestudy.techStack.map((stack: string) => (
              <ul key={stack}>
                <li className="text-base py-1 list-disc list-inside">
                  {stack}
                </li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-5">
            <h3 className="text-lg font-bold">Duration</h3>
            <p className="text-base">{casestudy.duration}</p>

          </div>

        </div>



        <div className="prose prose-lg my-10 mx-auto">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}