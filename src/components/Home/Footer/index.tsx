import Link from "next/link"
import HomeFooterSocial from "./social"

export default function HomeFooter() {
  return (
    <div className="bg-gray-900 dark:bg-darkblack">
      <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto border-t dark:border-gray-900 py-12">
        <div className="space-y-6">
          <h3 className="text-2xl text-gray-50 font-medium mx-auto">😀 Wanna say Hi?</h3>
          <p className="text-base text-gray-400 font-normal"> I&apos;d love to have a chat. Drop an email at&nbsp;
            <Link href="mailto:msgsrive@gmail.com">
              <a className="text-gray-300 hover:text-indigo-500 dark:hover:text-sky-400 hover:underline font-semibold">msgsrive@gmail.com</a>
            </Link></p>
          <p className="text-base text-gray-400 font-normal">I designed & developed this site using&nbsp;
            <Link href="https://nextjs.org/"><a className="text-base font-semibold text-gray-300 hover:text-indigo-500 hover:underline">Next.js</a></Link>,&nbsp;
            <Link href="https://tailwindcss.com/"><a className="text-base font-semibold text-gray-300 hover:text-indigo-500 hover:underline">Tailwind CSS</a></Link>,&nbsp;
            <Link href="https://graphcms.com/"><a className="text-base font-semibold text-gray-300 hover:text-indigo-500 hover:underline">Graph CMS</a></Link>,
            &amp;&nbsp;lots of ☕️
          </p>
          <p className="text-base text-gray-400 font-normal">Typeset is&nbsp;
            <Link href="https://fonts.google.com/specimen/Work+Sans">
              <a className="text-gray-300 hover:text-indigo-500 dark:hover:text-sky-400 hover:underline font-semibold">Work Sans</a>
            </Link> | Icons from&nbsp;
            <Link href="https://heroicons.dev">
              <a className="text-gray-300 hover:text-indigo-500 dark:hover:text-sky-400 hover:underline font-semibold">Heroicons</a>
            </Link> | Patterns from&nbsp;
            <Link href="https://www.heropatterns.com/">
              <a className="text-gray-300 hover:text-indigo-500 dark:hover:text-sky-400 hover:underline font-semibold">Hero Patterns</a>
            </Link>
          </p>
        </div>

        <HomeFooterSocial />

      </div>

      <div>

      </div>

    </div>
  )
}