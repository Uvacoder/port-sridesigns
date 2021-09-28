import Header from "../../components/Header";
import Image from "next/image";
import { GetAppExploration, GetAppExplorationSlug } from "../../graphql/data/apps/app"
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Head from "next/head";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Calendar from "../../assets/calendar";

interface Props {
  slug: string
  source: MDXRemoteSerializeResult
}

export async function getStaticPaths() {
  const slugRes = await GetAppExplorationSlug()
  const slugs = slugRes.appExplorations
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const work = await GetAppExploration(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      app: work.appExplorations[0],
      source: await serialize(work.appExplorations[0].body.markdown)
    },
  }
}

export default function AppExplorationView({ app, source }) {
  return (
    <Layout>
      <Head>
        <title>{app.title}</title>
        <link rel="icon" href="/favicons/manlaptop.png" />
      </Head>
      <ScrollToTop />
      <Header />
      <main className="mt-20 md:mt-28">
        <header className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto space-y-4 py-10">
          <h2 className="text-4xl text-gray-900 dark:text-gray-50 font-bold text-center">{app.title}</h2>
          <p className="text-lg font-medium text-center text-gray-700 dark:text-gray-400">{app.summary}</p>
          <div className="flex justify-center space-x-2 items-center align-middle">
            <Calendar />
            <p className="text-gray-500 font-medium text-base">{new Date(app.publishedAt).toDateString()}</p>
          </div>
        </header>
        <div className="max-w-screen md:max-w-screen-md lg:max-w-screen-lg mx-auto my-5 text-center">
          <Image
            src={app.coverImage.url}
            alt={app.title}
            width={1000}
            height={480}
            objectFit="cover"
          />
        </div>

        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg prose prose-lg dark:prose-dark text-gray-900 dark:text-gray-100 my-10 mx-6 md:mx-auto">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />

    </Layout>
  )
}