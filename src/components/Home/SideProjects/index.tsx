import Link from "next/link";
import Image from "next/image";



export default function HomeSideProject({ home }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto">
      <p className="text-sm text-green-600 dark:text-green-500 font-semibold bg-green-100 dark:bg-green-300 dark:bg-opacity-20 py-1 px-4 inline-flex mb-4 rounded">👻&nbsp;&nbsp;Side Project</p>
      {home?.sideProjects?.map((sproject) => (
        <div key={sproject.slug} className="space-y-2 md:grid grid-cols-3 gap-2 md:mx-auto">
          <div className="col-span-2 flex flex-col justify-between">
            <div className="space-y-2">

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
                <button className="text-base font-semibold text-indigo-600 dark:text-sky-400 hover:text-indigo-800 dark:hover:text-sky-600 hover:underline pt-8 pb-4">Read More</button>
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