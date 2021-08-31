import Link from "next/link"
import HomeFooterSocial from "./social"

export default function HomeFooter() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-screen lg:max-w-3xl lg:grid grid-cols-3 gap-6 mx-auto">
        <div className="col-span-2 space-y-6">
          <h3 className="text-3xl text-white font-normal mx-auto">😀 Wanna say Hi?</h3>
          <p className="text-base text-gray-200 font-normal"> I&apos;d love to have a chat.</p>
          <p className="text-base text-gray-200 font-normal">Drop an email at&nbsp;
            <Link href="mailto:msgsrive@gmail.com">
              <a className="hover:text-indigo-500 hover:underline font-semibold">msgsrive@gmail.com</a>
            </Link></p>
          <p className="text-base text-gray-200 font-normal">Site designed & developed by Sriram using&nbsp;
            <Link href="https://nextjs.org/"><a className="text-base font-semibold hover:text-indigo-500 hover:underline">Next.js</a></Link>,&nbsp;
            <Link href="https://tailwindcss.com/"><a className="text-base font-semibold hover:text-indigo-500 hover:underline">Tailwind CSS</a></Link>,&nbsp;
            <Link href="https://graphcms.com/"><a className="text-base font-semibold hover:text-indigo-500 hover:underline">Graph CMS</a></Link>,
            &amp;&nbsp;and lots of ☕️
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-bold text-gray-200 pb-2">Social</h3>
          <HomeFooterSocial />
        </div>


      </div>

      <div>

      </div>

    </div>
  )
}