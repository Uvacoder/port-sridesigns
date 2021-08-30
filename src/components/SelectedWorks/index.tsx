import Link from "next/link";
import Image from "next/image";



export default function SelectedWorks({ projects }) {
  return (
    <div className="lg:grid grid-cols-2 gap-6 mx-auto">
      {projects?.caseStudies?.map((project) => (
        <div key={project.slug} className="space-y-2">
          <Image
            src={project.bannerImage.url}
            alt={project.title}
            width={project.bannerImage.width}
            height={project.bannerImage.height}
            objectFit="cover"
          />
          <Link href={`/projects/${project.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{project.title}</h4>
            </a>
          </Link>
          <p className="text-lg font-medium text-gray-700">{project.summary}</p>
        </div>
      ))}
    </div>

  )
}