import Link from "next/link";
import FooterSocialLinks from "./social";

export default function Footer() {
  return (
    <footer className="max-w-screen border-t border-gray-200 bottom-0 w-full">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-6 md:mx-auto md:flex justify-between items-center">
        <div className="md:flex text-gray-500 font-normal text-sm justify-center py-5">
          <p>Sriram Venugopal&nbsp;&nbsp;|&nbsp;&nbsp;Feel free to drop a ‘hello’ @&nbsp;</p>
          <Link href="mailto:msgsrive@gmail.com">
            <a className="hover:text-indigo-600 hover:underline">msgsrive@gmail.com</a>
          </Link>
        </div>
        <div className="py-2 md:py-5">
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  )
}