import Link from 'next/link'
import Routes from '../../config/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Hamburger from '../../assets/hamburger';
import Close from '../../assets/close';
import MyLogo from '../../assets/logo';

const defaultRoutes = [
  Routes.home,
  Routes.projects,
  Routes.writing,
  Routes.about,
]

const Header = () => {

  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const currPathName = router.pathname
  const routesArray = Object.keys(Routes).map((r) => Routes[r])
  const mobileTitle =
    currPathName === '/'
      ? 'Home'
      : routesArray
        .filter((r) => r.path !== '/')
        .find((r) => currPathName.includes(r.path))?.label
  return (
    <div className="fixed top-0 z-10 w-full py-2 bg-white border-b border-gray-400 md:z-auto md:relative dark:border-opacity-10 border-opacity-20 md:bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-40 filter-blur" role="navigation">

      {/* Mobile Navigation Starts */}
      <div className="grid grid-cols-1 lg:hidden">
        <div className="flex items-center pr-4 text-primary">
          <button
            className="p-4 pl-4 -my-2"
            onClick={() => setIsActive(!isActive)}
            aria-label="toggle menu"
          >
            {isActive ? <Close /> : <Hamburger />}
          </button>
          <p className="font-sans text-sm font-semibold text-primary">
            {mobileTitle}
          </p>
        </div>
        {isActive && (
          <div className="w-full h-px mt-2 bg-gray-1000 bg-opacity-10" />
        )}
        {isActive &&
          defaultRoutes.map((route) => {
            const defaultLinks = `flex font-primary items-center pl-12 py-4 font-semibold text-sm text-primary text-opacity-80`

            return (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultLinks}`}>{route.label}</a>
              </Link>
            )
          })}
      </div>
      {/* Mobile Navigation Ends */}

      {/* Desktop Navigation Starts */}
      <div className="hidden lg:grid fixed bg-white top-0 z-10 w-full border-b border-gray-200 py-6">
        <div className="mx-auto grid grid-cols-4 gap-8 max-w-screen-lg">
          <div className="col-span-1 items-center ">
            <Link href="/">
              <a><MyLogo /></a>
            </Link>
          </div>
          <div className="col-span-2 flex flex-row space-x-24 items-center justify-center">
            {
              defaultRoutes.map((route) => {
                const isSelected = route.path === router.pathname
                const defaultLinks = `font-primary text-lg font-medium flex items-center text-gray-700 justify-center`
                const activeLinks = `font-semibold filter-saturate filter-blur text-gray-900 border-b-2 border-gray-900`
                const inactiveLinks = `hover:text-gray-900 filter-saturate`
                return (
                  <Link href={route.path} key={route.path}>
                    <a
                      className={`
                  ${defaultLinks} 
                  ${isSelected ? activeLinks : inactiveLinks}`}
                    >
                      {route.label}
                    </a>
                  </Link>
                )
              })
            }
          </div>
          <div className="flex flex-row col-span-1 space-x-8 items-center justify-end">

            <Link href="mailto:msgsrive@gmail.com">
              <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <svg className="w-5 h-5 text-gray-800 hover:text-indigo-600 fill-current transform hover:scale-110" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </a>
            </Link>

            <Link href="https://twitter.com/designersriram">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800 fill-current hover:text-twitter transform hover:scale-110" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
            </Link>

          </div>

        </div>

      </div>

      {/* Desktop Navigation Ends */}
    </div>

  );
}

export default Header;