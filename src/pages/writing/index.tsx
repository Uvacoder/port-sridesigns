import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { GetBlogPosts } from "../../graphql/data/posts/blogposts";


export async function getStaticProps() {
  const blogs = await GetBlogPosts()

  return {
    //This data is a little dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      blogs
    },
  }
}

export default function Writing({ blogs }) {
  console.log(blogs);
  return (
    <Layout>
      <Head>
        <title>Writing</title>
        <link rel="icon" href="/favicons/alien.png" />
      </Head>
      <Header />
      <main className="max-w-screen md:max-w-screen-md mx-6 md:mx-auto ">
        <header className="pt-32 pb-24 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Writing</h1>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-400">Sharing my thoughts on user experience, product design,
            art and tech.</p>
        </header>
        <div className="space-y-10 pb-20">
          {blogs?.blogPosts?.map((blog) => (
            <div key={blog.slug} className="space-y-2">
              <Link href={`/writing/${blog.slug}`}>
                <a>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-500 dark:hover:text-sky-400">{blog.title}</h4>
                </a>
              </Link>
              <p className="text-base font-medium text-gray-700 dark:text-gray-400">{blog.excerpt}</p>
              <p className="text-sm font-medium text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
            </div>
          ))}

        </div>
      </main>
      <Footer />






    </Layout>
  )
}