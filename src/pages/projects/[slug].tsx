import Header from "../../components/Header";
import Link from "next/dist/client/link";
import { GetCaseStudy, GetCaseStudySlug } from "../../graphql/data/projects/casestudy"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";

interface Props {
  slug: string
  casestudy: {
    id: string
    title: string
    summary: string
    publishedAt: string
    coverImage: {
      url: string
      width: number
      height: number
    }
    content: {
      json: string
      markdown: string
    }
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
        <title>Case Study</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <header className="flex-col mt-12 mb-10 space-y-4 justify-center">
          <h2 className="text-5xl text-gray-800 font-bold text-center">{casestudy.title}</h2>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">{casestudy.summary}</p>
        </header>

        <div className="prose prose-lg my-10 mx-auto">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}