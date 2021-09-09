import Link from "next/link";
import Image from "next/image";



export default function HomeBlogList({ home }) {
  return (
    <div className="my-8 space-y-10">
      {home?.blogPosts?.map((blog) => (
        <div key={blog.slug} className="space-y-2">
          <Link href={`/writing/${blog.slug}`}>
            <a>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-sky-400">{blog.title}</h4>
            </a>
          </Link>
          <p className="text-base font-medium text-gray-700 dark:text-gray-400">{blog.excerpt}</p>
          <p className="text-sm font-medium text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
        </div>
      ))}
    </div>

  )
}