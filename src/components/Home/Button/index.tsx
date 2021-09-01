import Link from "next/link"


export default function HomeButton() {
  return (
    <div className="flex space-x-8 mt-8">
      <Link href="#casestudies">
        <a>
          <button className="bg-gray-900 py-3 px-8 border-4 border-gray-900 text-white hover:bg-white hover:text-gray-900 font-bold text-lg text-center transition duration-200 ease-linear">View my works&nbsp;👇</button>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <button className="bg-white py-3 px-8 border-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-lg text-center transition duration-200 ease-linear">Read more about me&nbsp;😀</button>
        </a>
      </Link>
    </div>
  )
}