import Link from "next/link";
import Image from "next/image";



export default function SideProjectsList({ sideprojects }) {
  return (
    <div className="mx-auto">
      {sideprojects?.sideProjects?.map((sideproject) => (
        <div key={sideproject.slug} className="md:grid grid-cols-3 gap-4 space-y-4 md:space-y-0">
          <div className="space-y-2 col-span-2">
            <Link href={`/projects/${sideproject.slug}`}>
              <a>
                <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{sideproject.title}</h4>
              </a>
            </Link>
            <p className="text-base font-medium text-gray-700">{sideproject.summary}</p>
            <p className="text-sm font-medium text-gray-500">{new Date(sideproject.publishedAt).toDateString()}</p>
            <Link href={`/projects/${sideproject.slug}`}>
              <a>
                <button className="text-base font-semibold text-indigo-600 hover:underline pt-8">Read More</button>
              </a>
            </Link>
          </div>
          <div>
            <Image
              src={sideproject.coverImage.url}
              alt={sideproject.title}
              width={sideproject.coverImage.width}
              height={sideproject.coverImage.height}
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>

  )
}