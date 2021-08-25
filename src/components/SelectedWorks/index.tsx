import Link from "next/link";
import { GetCaseStudies } from "../../graphql/data/projects/casestudies";

interface Props {
  slug: string
  caseStudies: {
    works: {
      id: string
      title: string
      publishedAt: string
      summary: string
      bannerImage: {
        url: string
        width: number
        height: number
      }
    }
  }
}


export async function getStaticProps() {
  const works = await GetCaseStudies()

  return {
    //This data is a little dynamic, so we'll update it every hour.
    revalidate: 60 * 60,
    props: {
      works
    },
  }
}

export default function SelectedWorks({ works }: Props) {
  console.log(works);
  return (
    <div className="lg:grid grid-cols-2 gap-6 mx-auto">
      {works?.caseStudies?.map((work) => (
        <div key={work.slug} className="space-y-2">
          <Link href={`/projects/${work.slug}`}>
            <a>
              <h4 className="text-2xl font-bold text-gray-800">{work.title}</h4>
            </a>
          </Link>
          <p className="text-lg font-normal text-gray-700">{work.summary}</p>
        </div>
      ))}
    </div>

  )
}