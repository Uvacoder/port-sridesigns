import Link from "next/link";



export default function AppList({ apps }) {
  return (
    <div className="mx-auto">
      {apps?.appExplorations?.map((app) => (
        <div key={app.slug} className="space-y-4">
          <div className="space-y-2">
            <Link href={`/apps/${app.slug}`}>
              <a>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-sky-400">{app.title}</h4>
              </a>
            </Link>
            <p className="text-base font-medium text-gray-700 dark:text-gray-400">{app.summary}</p>
            <p className="text-sm font-medium text-gray-500">{new Date(app.publishedAt).toDateString()}</p>
            <Link href={`/apps/${app.slug}`}>
              <a>
                <button className="text-base font-semibold text-indigo-600 dark:text-sky-400 hover:text-indigo-800 dark:hover:text-sky-600 hover:underline pt-4">Read More</button>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>

  )
}