import Link from "next/link";
import FooterSocialLinks from "./social";

export default function Footer() {
  return (
    <footer className="max-w-screen border-t border-gray-200 dark:border-gray-900 w-full">
      <div className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto md:flex justify-between items-center">
        <div className="md:flex text-gray-500 font-normal text-sm justify-center py-5">
          <p>Sriram &nbsp;&nbsp;|&nbsp;&nbsp;Feel free to drop a ‘hello’ @&nbsp;</p>
          <Link href="mailto:msgsrive@gmail.com">
            <a className="hover:text-indigo-600 dark:hover:text-sky-400 hover:underline font-medium">msgsrive@gmail.com</a>
          </Link>
        </div>
        <div className="py-2 md:py-5">
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  )
}