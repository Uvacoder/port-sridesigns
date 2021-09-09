import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Calendar from "../../assets/calendar";
import BlogDivider from "../../components/BlogDivider";
import { GetPost, GetPostSlug } from "../../graphql/data/posts/post";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import ArrowLeft from "../../assets/arrow-left";


export async function getStaticPaths() {
  const data = await GetPostSlug()
  const slugs = data.blogPosts

  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.slug }
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await GetPost(params.slug)

  return {
    revalidate: 60 * 60,
    props: {
      blog: post.blogPosts[0],
      content: await serialize(post.blogPosts[0].body.markdown)
    },
  }
}

export default function PostView({ blog, content }) {
  console.log(blog);

  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>

      <ScrollToTop />
      <div className="max-w-screen h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-400"></div>

      <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
        <Link href="/writing">
          <a>
            <button className="inline-flex space-x-2 my-10 items-center">
              <ArrowLeft />
              <p className="font-medium text-gray-900 dark:text-gray-50 pb-1 hover:text-indigo-600 dark:hover:text-sky-400">Back to Writing</p>
            </button>
          </a>
        </Link>
        <main>
          <header className="flex-col mt-12 mb-10 space-y-4 justify-center">
            <h2 className="text-4xl text-gray-900 dark:text-gray-50 font-bold text-center">{blog.title}</h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-400 font-medium">{blog.excerpt}</p>
            <div className="flex justify-center space-x-2 items-center align-middle">
              <Calendar />
              <p className="text-gray-500 font-medium text-base">{new Date(blog.publishedAt).toDateString()}</p>
            </div>
          </header>
          <BlogDivider />

          <div className="prose prose-lg dark:prose-dark text-gray-900 dark:text-gray-100 my-10 mx-auto">
            <MDXRemote {...content} />
          </div>

        </main>

      </div>
      <Footer />


    </Layout>

  )
}