import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import ArrowLeft from "../../assets/arrow-left";
import Calendar from "../../assets/calendar";
import BlogDivider from "../../components/BlogDivider";
import { GetPost, GetPostSlug } from "../../graphql/data/posts/post";

interface Props {
  slug: string
  blog: {
    id: string
    title: string
    publishedAt: string
    excerpt: string
    coverImage: {
      url: string
      width: number
      height: number
    }
    body: {
      json: string
      markdown: string
    }
  }
}

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
    },
  }
}

export default function PostView({ blog }: Props) {
  console.log(blog);

  return (
    <Layout>
      <div className="max-w-screen-md lg:max-w-6xl mx-auto">
        <Link href="/writing">
          <a>
            <nav className="max-w-screen-md inline-flex space-x-2 my-10 items-center">
              <ArrowLeft />
              <p className="font-medium text-gray-800 pb-1">Back to Writing</p>
            </nav>
          </a>
        </Link>
        <main className="max-w-screen-md mx-auto">
          <header className="flex-col mt-16 mb-10 space-y-4 justify-center">
            <h2 className="text-5xl text-gray-800 font-bold text-center">{blog.title}</h2>
            <p className="text-xl text-center text-gray-700">{blog.excerpt}</p>
            <div className="flex justify-center space-x-2">
              <Calendar />
              <p className="text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
            </div>
          </header>
          <BlogDivider />
        </main>

      </div>


    </Layout>

  )
}