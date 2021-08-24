import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-screen border-t border-gray-300 h-16">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-6xl mx-auto">
        <div className="flex text-gray-500 font-normal text-sm justify-center py-5">
          <p>Sriram Venugopal&nbsp;&nbsp;|&nbsp;&nbsp;Feel free to drop a ‘hello’ @&nbsp;</p>
          <Link href="mailto:msgsrive@gmail.com">
            <a>msgsrive@gmail.com</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}