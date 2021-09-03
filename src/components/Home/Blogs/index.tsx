import Link from "next/link";
import Image from "next/image";



export default function HomeBlogList({ home }) {
  return (
    <div className="max-w-screen lg:max-w-screen-lg mx-6 lg:mx-auto my-8 bg-white border-4 border-black px-10 py-8 space-y-10">
      {home?.blogPosts?.map((blog) => (
        <div key={blog.slug} className="space-y-2">
          <Link href={`/writing/${blog.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-900 hover:text-indigo-600">{blog.title}</h4>
            </a>
          </Link>
          <p className="text-lg font-medium text-gray-700">{blog.excerpt}</p>
          <p className="text-base font-medium text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
        </div>
      ))}
    </div>

  )
}