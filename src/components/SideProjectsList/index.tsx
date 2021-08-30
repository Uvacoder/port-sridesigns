import Link from "next/link";
import Image from "next/image";



export default function SideProjectsList({ sideprojects }) {
  return (
    <div className="mx-auto">
      {sideprojects?.sideProjects?.map((sideproject) => (
        <div key={sideproject.slug} className="space-y-2">
          <Link href={`/projects/${sideproject.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{sideproject.title}</h4>
            </a>
          </Link>
          <p className="text-lg font-medium text-gray-700">{sideproject.summary}</p>
          <p className="text-base font-medium text-gray-500">{new Date(sideproject.publishedAt).toDateString()}</p>
        </div>
      ))}
    </div>

  )
}