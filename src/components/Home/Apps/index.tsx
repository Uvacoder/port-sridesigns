import Link from "next/link";



export default function HomeAppList({ home }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto space-y-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 my-8">App Explorations</h2>
      {home?.appExplorations?.map((app) => (
        <div key={app.slug} className="space-y-2">
          <Link href={`/apps/${app.slug}`}>
            <a>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-sky-400">{app.title}</h4>
            </a>
          </Link>
          <p className="text-base font-medium text-gray-700 dark:text-gray-400">{app.summary}</p>
          <p className="text-sm font-medium text-gray-500">{new Date(app.publishedAt).toDateString()}</p>
        </div>
      ))}
    </div>

  )
}