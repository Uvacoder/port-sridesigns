import Link from "next/link";
import Image from "next/image";



export default function HomeSideProject({ home }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
      {home?.sideProjects?.map((sproject) => (
        <div key={sproject.slug} className="space-y-2 md:grid grid-cols-2 gap-2 md:mx-auto">
          <div className="col-span-1 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-sm text-yellow-600 font-semibold bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-30 py-1 px-4 inline-flex mb-4 rounded">👻&nbsp;&nbsp;Side Project</p>
              <Link href={`/sideprojects/${sproject.slug}`}>
                <a>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-sky-400">{sproject.title}</h4>
                </a>
              </Link>
              <p className="text-base font-medium text-gray-700 dark:text-gray-400">{sproject.summary}</p>
              <p className="text-sm font-medium text-gray-500">{new Date(sproject.publishedAt).toDateString()}</p>
            </div>
            <Link href={`/sideprojects/${sproject.slug}`}>
              <a>
                <button className="text-base font-semibold text-indigo-600 dark:text-indigo-500 hover:text-indigo-800 dark:hover:text-sky-600 hover:underline pb-4">Read More</button>
              </a>
            </Link>
          </div>
          <div className="overflow-hidden">
            <Image
              src={sproject.coverImage.url}
              alt={sproject.title}
              width={sproject.coverImage.width}
              height={sproject.coverImage.height}
              objectFit="cover"
              className="transition-all duration-500 ease-in-out transform hover:scale-110 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>

  )
}