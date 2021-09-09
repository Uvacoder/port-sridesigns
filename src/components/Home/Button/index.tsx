import Link from "next/link"
import HomeSocial from "../Social"


export default function HomeButton() {
  return (
    <div className="md:inline-flex space-x-0 md:space-x-12 my-8">
      <Link href="/about">
        <a>
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg flex items-center p-0.5 hover:shadow-lg">
            <button className="bg-white dark:bg-darkblack py-2 px-6 text-gray-900 dark:text-gray-50 hover:text-indigo-500 dark:hover:text-sky-400 font-bold text-base text-center transition duration-200 ease-linear rounded-md w-full">Read more about me&nbsp;&nbsp;😀</button>
          </div>
        </a>
      </Link>
      <HomeSocial />
    </div>
  )
}