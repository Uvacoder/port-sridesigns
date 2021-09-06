import Link from "next/link";
import Image from "next/image";



export default function HomeSideProject({ home }) {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-lg mx-auto">
      {home?.sideProjects?.map((sproject) => (
        <div key={sproject.slug} className="space-y-2 lg:grid grid-cols-2 gap-2 mx-6 lg:mx-auto">
          <div className="col-span-1 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-sm text-yellow-600 font-semibold bg-yellow-100 py-1 px-4 inline-flex mb-4 rounded">👻&nbsp;&nbsp;Side Project</p>
              <Link href={`/sideprojects/${sproject.slug}`}>
                <a>
                  <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{sproject.title}</h4>
                </a>
              </Link>
              <p className="text-lg font-medium text-gray-700">{sproject.summary}</p>
              <p className="text-base font-medium text-gray-500">{new Date(sproject.publishedAt).toDateString()}</p>
            </div>
            <Link href={`/sideprojects/${sproject.slug}`}>
              <a>
                <button className="text-lg font-semibold text-indigo-600 hover:underline pb-4">Read More</button>
              </a>
            </Link>
          </div>
          <div className="border-4 border-transparent hover:border-black">
            <Image
              src={sproject.coverImage.url}
              alt={sproject.title}
              width={sproject.coverImage.width}
              height={sproject.coverImage.height}
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>

  )
}