import Link from "next/link"

export default function HomeSocialLinks() {
  return (
    <div className="flex space-x-10 items-center">
      {/*svg for email icon*/}

      <Link href="mailto:msgsrive@gmail.com">
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <svg className="w-7 h-7 text-white hover:text-indigo-600 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </a>
      </Link>

      {/*svg for twitter icon*/}

      <Link href="https://twitter.com/designersriram">
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-twitter fill-current hover:text-white" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
          </svg>
        </a>
      </Link>

      {/*svg for instagram icon*/}

      <Link href="https://instagram.com/sriram015">
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">

          <svg className="w-6 h-6 fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.50001 2.72114C-0.643327 5.98553 6.57141e-06 9.45321 6.57141e-06 19.9879C6.57141e-06 28.7363 -1.52666 37.5063 6.46334 39.5709C8.95834 40.2125 31.065 40.2125 33.5567 39.5676C36.8833 38.7094 39.59 36.0116 39.96 31.3075C40.0117 30.6509 40.0117 9.33657 39.9583 8.6667C39.565 3.65597 36.48 0.768174 32.415 0.183283C31.4833 0.0483083 31.2967 0.00831575 26.5167 -1.60262e-05C9.56167 0.00831575 5.84501 -0.746543 2.50001 2.72114Z" fill="url(#paint0_linear)" />
            <path d="M19.9967 5.23166C13.945 5.23166 8.19835 4.69333 6.00335 10.3267C5.09668 12.6533 5.22835 15.675 5.22835 20.0017C5.22835 23.7983 5.10668 27.3667 6.00335 29.675C8.19335 35.3117 13.9867 34.7717 19.9933 34.7717C25.7883 34.7717 31.7634 35.375 33.985 29.675C34.8934 27.325 34.76 24.3483 34.76 20.0017C34.76 14.2317 35.0783 10.5067 32.28 7.70999C29.4467 4.87666 25.615 5.23166 19.99 5.23166H19.9967ZM18.6733 7.89333C31.2967 7.87333 32.9033 6.47 32.0167 25.965C31.7017 32.86 26.4517 32.1033 19.9983 32.1033C8.23168 32.1033 7.89335 31.7667 7.89335 19.995C7.89335 8.08666 8.82668 7.89999 18.6733 7.88999V7.89333ZM27.88 10.345C26.9017 10.345 26.1083 11.1383 26.1083 12.1167C26.1083 13.095 26.9017 13.8883 27.88 13.8883C28.8583 13.8883 29.6517 13.095 29.6517 12.1167C29.6517 11.1383 28.8583 10.345 27.88 10.345V10.345ZM19.9967 12.4167C15.8083 12.4167 12.4133 15.8133 12.4133 20.0017C12.4133 24.19 15.8083 27.585 19.9967 27.585C24.185 27.585 27.5783 24.19 27.5783 20.0017C27.5783 15.8133 24.185 12.4167 19.9967 12.4167V12.4167ZM19.9967 15.0783C26.505 15.0783 26.5133 24.925 19.9967 24.925C13.49 24.925 13.48 15.0783 19.9967 15.0783Z" fill="white" />
            <defs>
              <linearGradient id="paint0_linear" x1="2.57671" y1="37.4381" x2="39.7465" y2="5.26207" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDD55" />
                <stop offset="0.5" stopColor="#FF543E" />
                <stop offset="1" stopColor="#C837AB" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </Link>

      {/* svg for github icon */}

      <Link href="https://www.github.com/in/sridesigns">
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white fill-current hover:text-yellow-400" viewBox="0 0 40 40" >
            <path d="M19.9975 0C8.955 0 0 8.99 0 20.08C0 28.95 5.73 36.475 13.68 39.1325C14.68 39.3175 15.045 38.6975 15.045 38.165C15.045 37.6875 15.0275 36.425 15.0175 34.75C9.455 35.9625 8.28 32.0575 8.28 32.0575C7.3725 29.7375 6.06 29.12 6.06 29.12C4.2425 27.875 6.195 27.9 6.195 27.9C8.2025 28.0425 9.2575 29.97 9.2575 29.97C11.0425 33.0375 13.94 32.1525 15.08 31.6375C15.26 30.34 15.7775 29.455 16.35 28.9525C11.91 28.445 7.24 26.7225 7.24 19.03C7.24 16.8375 8.02 15.045 9.3 13.64C9.0925 13.1325 8.4075 11.09 9.495 8.3275C9.495 8.3275 11.175 7.7875 14.995 10.385C16.59 9.94 18.3 9.7175 20.0025 9.71C21.7 9.72 23.4125 9.94 25.01 10.3875C28.8275 7.79 30.505 8.33 30.505 8.33C31.595 11.095 30.91 13.135 30.705 13.6425C31.9875 15.0475 32.76 16.84 32.76 19.0325C32.76 26.745 28.085 28.4425 23.63 28.94C24.3475 29.56 24.9875 30.785 24.9875 32.6575C24.9875 35.3425 24.9625 37.5075 24.9625 38.165C24.9625 38.7025 25.3225 39.3275 26.3375 39.13C34.275 36.47 40 28.9475 40 20.08C40 8.99 31.045 0 19.9975 0Z" />
          </svg>
        </a>
      </Link>

      {/*svg for linkedin icon*/}

      <Link href="https://www.linkedin.com/in/sriramvenugopal">
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <svg className="w-6 h-6 text-linkedin fill-current hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M0 4.80333C0 2.15167 2.15167 0 4.80333 0C7.45333 0 9.605 2.15167 9.60667 4.80333C9.60667 7.455 7.455 9.65167 4.80333 9.65167C2.15167 9.65167 0 7.455 0 4.80333ZM39.9901 40.0001V39.9984H40.0001V25.3284C40.0001 18.1517 38.4551 12.6234 30.0651 12.6234C26.0318 12.6234 23.3251 14.8367 22.2201 16.9351H22.1034V13.2934H14.1484V39.9984H22.4318V26.7751C22.4318 23.2934 23.0918 19.9267 27.4034 19.9267C31.6518 19.9267 31.7151 23.9001 31.7151 26.9984V40.0001H39.9901ZM0.660156 13.2949H8.95349V39.9999H0.660156V13.2949Z"></path>
          </svg>
        </a>
      </Link>

    </div >
  )
}