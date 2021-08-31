import Link from "next/link";
import Image from "next/image";


export default function HomeWork({ home }) {
  return (
    <div className="max-w-screen-sm lg:max-w-3xl lg:grid grid-cols-2 gap-6 mx-6 md:mx-auto my-8">
      {home?.caseStudies?.map((project) => (
        <div key={project.slug}>
          <div className="py-4">
            <Image
              src={project.bannerImage.url}
              alt={project.title}
              width={project.bannerImage.width}
              height={project.bannerImage.height}
              objectFit="cover"
            />

          </div>

          <Link href={`/projects/${project.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 pb-2">{project.title}</h4>
            </a>
          </Link>
          <p className="text-base font-medium text-gray-700 pb-4">{project.summary}</p>

          <Link href={`/projects/${project.slug}`}>
            <a>
              <button className="text-lg font-semibold text-indigo-600 hover:underline pb-4">Read Case Study</button>
            </a>
          </Link>

        </div>
      ))}
    </div>

  )
}