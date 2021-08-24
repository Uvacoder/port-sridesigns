import Link from 'next/link'
import Routes from '../../config/routes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Hamburger from '../../assets/hamburger';
import Close from '../../assets/close';

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
      <div className="grid grid-cols-1 md:hidden">
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
      <div className=" mx-auto hidden max-w-screen-md grid-cols-4 gap-1 md:grid h-24">
        {
          defaultRoutes.map((route) => {
            const isSelected = route.path === router.pathname
            const defaultLinks = `font-primary text-lg font-normal flex items-center text-gray-700 justify-center`
            const activeLinks = `font-semibold filter-saturate filter-blur text-gray-900`
            const inactiveLinks = `hover:bg-gray-900 filter-saturate hover:bg-opacity-5 dark:hover:bg-white dark:text-white  hover:text-gray-900 dark:hover:text-gray-100`
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
      {/* Desktop Navigation Ends */}
    </div>

  );
}

export default Header;