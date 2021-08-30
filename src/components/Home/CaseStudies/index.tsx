import Link from "next/link";
import Image from "next/image";



export default function HomeWork({ home }) {
  return (
    <div className="space-y-16">
      {home?.caseStudies?.map((project) => (
        <div key={project.slug} className="max-w-screen lg:max-w-3xl lg:grid grid-cols-2 gap-6 mx-auto my-8">
          <div>
            <Image
              src={project.bannerImage.url}
              alt={project.title}
              width={project.bannerImage.width}
              height={project.bannerImage.height}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <Link href={`/projects/${project.slug}`}>
                <a>
                  <h4 className="text-3xl font-bold text-gray-800 hover:text-indigo-600">{project.title}</h4>
                </a>
              </Link>
              <p className="text-lg font-medium text-gray-700">{project.summary}</p>
            </div>

            <Link href={`/projects/${project.slug}`}>
              <a>
                <button className="text-lg font-bold text-indigo-600 hover:underline pb-4">Read Case Study</button>
              </a>
            </Link>


          </div>
        </div>
      ))}
    </div>

  )
}