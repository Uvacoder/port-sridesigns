import Link from "next/link";
import Image from "next/image";



export default function HomeSideProject({ home }) {
  return (
    <div className=" max-w-screen lg:max-w-3xl xl:max-w-screen-lg mx-auto my-8">
      {home?.sideProjects?.map((sproject) => (
        <div key={sproject.slug} className="space-y-2">
          {/*<Image
            src={sproject.bannerImage.url}
            alt={sproject.title}
            width={sproject.bannerImage.width}
            height={sproject.bannerImage.height}
            objectFit="cover"
          />*/}
          <Link href={`/projects/${sproject.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800 hover:text-indigo-600">{sproject.title}</h4>
            </a>
          </Link>
          <p className="text-lg font-medium text-gray-700">{sproject.summary}</p>
          <p className="text-base font-medium text-gray-500">{new Date(sproject.publishedAt).toDateString()}</p>
        </div>
      ))}
    </div>

  )
}