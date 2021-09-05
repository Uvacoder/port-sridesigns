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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="lg:mt-14">
        <header className="bg-rose-400 h-3/5 py-24 flex flex-col items-center justify-center bg-plus bg-repeat">
          <h1 className="text-6xl text-center font-bold pb-5">Writing</h1>
          <p className="text-xl font-medium text-center max-w-xl mx-auto">Sharing my thoughts on user experience, product design,
            art and tech.</p>
        </header>
        <div className="max-w-screen-sm md:max-w-xl mx-6 md:mx-auto my-16 space-y-10">
          {blogs?.blogPosts?.map((blog) => (
            <div key={blog.slug} className="space-y-2">
              <Link href={`/writing/${blog.slug}`}>
                <a>
                  <h4 className="text-2xl font-bold text-gray-800">{blog.title}</h4>
                </a>
              </Link>
              <p className="text-lg font-medium text-gray-700">{blog.excerpt}</p>
              <p className="text-base font-medium text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
            </div>
          ))}

        </div>
      </main>
      <Footer />

    </Layout>
  )
}