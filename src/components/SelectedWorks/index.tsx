import Link from "next/link";
import Image from "next/image";



export default function SelectedWorks({ projects }) {
  return (
    <div className="space-y-10 md:space-y-0 md:grid grid-cols-2 gap-8 mx-auto">
      {projects?.caseStudies?.map((project) => (
        <div key={project.slug} className="space-y-2 overflow-hidden">
          <Link href={`/projects/${project.slug}`}>
            <a>
              <Image
                src={project.bannerImage.url}
                alt={project.title}
                width={project.bannerImage.width}
                height={project.bannerImage.height}
                objectFit="cover"
                className="transition-all duration-500 ease-in-out transform hover:scale-125"
              />
            </a>
          </Link>

          <Link href={`/projects/${project.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{project.title}</h4>
            </a>
          </Link>
          <p className="text-base font-medium text-gray-700">{project.summary}</p>
          <Link href={`/projects/${project.slug}`}>
            <a>
              <button className="text-base font-semibold text-indigo-600 hover:underline py-4">Read Case Study</button>
            </a>
          </Link>
        </div>
      ))}
    </div>

  )
}