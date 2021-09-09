import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePic from "../assets/profilePic.png"


export default function About() {

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicons/smileyface.png" />
      </Head>
      <Header />
      <main className="max-w-screen-sm md:max-w-screen-md mx-6 md:mx-auto py-16">
        <header className="space-y-4 pt-16 pb-10">
          <Image
            src={profilePic}
            alt="This is Meee!"
            width={180}
            height={180}
            objectFit="cover"
            className="rounded-full bo"
          />
          <h1 className="text-4xl font-bold text-left leading-snug py-5">Hello, I&apos;m Sriram. I&apos;m a product designer, maker, and illustrator from Chennai.<br /> I &apos;m currently designing products &amp; experiences for&nbsp;
            <Link href="https://www.tcs.com/">
              <a className="hover:text-sky-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500" target="_blank" rel="noopener noreferrer">TCS.</a>
            </Link>
          </h1>
          <Link href="https://drive.google.com/file/d/1bzjQ13Z0JoyGdDPTlDz5MvbK25wYlG2_/view?usp=sharing">
            <a target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg flex md:inline-flex items-center p-0.5 hover:shadow-md my-6">
                <button className="bg-white dark:bg-gray-900 py-2 px-6 text-gray-900 dark:text-gray-50 hover:text-sky-500 font-bold text-base text-center transition duration-200 ease-linear rounded-md w-full">View my resume&nbsp;&nbsp;😎</button>
              </div>
            </a>
          </Link>
        </header>
        <div className="space-y-8  text-lg font-medium text-gray-900 dark:text-gray-50 leading-loose ">
          <div className="space-y-6">
            <p>I&apos;m a core member of an in-house product design team, currently designing solutions for the <strong className="font-semibold text-gray-900 dark:text-gray-50">&lsquo;Digital Workplace&rsquo;</strong> business unit.</p>
            <p>We create products and solutions in-house and collaborate with a diverse clientele across the globe to create seamless and delightful employee experiences across enterprise applications.</p>
            <Link href="https://www.tcs.com/reimagining-research/the-digital-workplace">
              <a target="_blank" rel="noopener noreferrer">
                <p className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600 text-lg py-5">Read more about Digital Workplace</p>
              </a>
            </Link>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 space-y-6 border-l-2 rounded-r-lg border-rose-400 text-base leading-loose">
              <p className="text-2xl">🥳</p>
              <p>Recently, TCS embraced Microsoft 365 to create unified communication, secure collaboration and seamless access to integrated business applications.</p>
              <p>I helped design and launch an automated and &lsquo;gamified&rsquo; migration process that enabled TCS to onboard more than <strong className="font-semibold">170,000 employees in less than 180 days.</strong></p>
              <p>This initiative helped us <em className="italic">reduce costs and human hours, increase agility and productivity</em> and helped us seamlessly enable the <em className="italic">transition to remote work</em> when the pandemic occurred.</p>
              <Link href="https://drive.google.com/file/d/1bzjQ13Z0JoyGdDPTlDz5MvbK25wYlG2_/view?usp=sharing">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-lg flex md:inline-flex items-center p-0.5 hover:shadow-md my-6">
                    <button className="bg-white dark:bg-gray-900 py-2 px-6 text-gray-900 dark:text-gray-50 hover:text-sky-400 font-bold text-base text-center transition duration-200 ease-linear rounded-md w-full">Read more on our feature in Microsoft stories</button>
                  </div>
                </a>
              </Link>
            </div>

          </div>

          <div className="space-y-6">
            <p>Before Digital Workplace, I was part of the <strong className="font-semibold">Fresco Design Team.</strong> We designed a suite of mobile and web applications for the 400k+ employees of TCS.</p>

            <p>I helped design and successfully launch a <strong className="font-semibold">&ldquo;Gamified&rdquo; Learning platform</strong> that incentivised learning and progress and helped upskill more than <strong className="font-semibold">300K employees</strong> in the new digital technologies.</p>

            <p>I also led the end-to-end design of revamping the <strong className="font-semibold">appraisal management platform of TCS.</strong> We created and launched a platform that empowered <strong className="font-semibold">400k+ employees</strong> to define their career path and aspirations and help them progress through continuous feedback on their goals and attributes.</p>
            <Link href="https://www.tcs.com/reimagining-research/the-digital-workplace">
              <a target="_blank" rel="noopener noreferrer">
                <p className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600 text-lg py-5">Read more about Fresco</p></a>
            </Link>

            <p>Outside of work, I experiment with design systems, create illustrations and design web and mobile applications to practise my design skills. You can access my experiments on&nbsp;
              <Link href="https://www.figma.com/@sriramvenugopal">
                <a className="hover:text-sky-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500" target="_blank" rel="noopener noreferrer">Figma.</a>
              </Link>
            </p>

            <p>I started my career in 2011 as a web developer and lost touch with coding once I moved into design in 2014. I recently started learning to code and will be working on side projects to help improve my coding. You can find me on&nbsp;
              <Link href="https://www.figma.com/@sriramvenugopal">
                <a className="hover:text-sky-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500" target="_blank" rel="noopener noreferrer">Github</a>
              </Link>
              , where I&apos;m learning to code.</p>

            <p>I also like to play video games, draw illustrations, read books and comics.</p>
          </div>


          <footer className="space-y-6 border-t border-gray-200 dark:border-gray-900 py-6">
            <p>You can find me on&nbsp;
              <Link href="https://twitter.com/designersriram">
                <a className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600" target="_blank" rel="noopener noreferrer">Twitter</a>
              </Link>
              &nbsp;/&nbsp;
              <Link href="https://instagram.com/sriram015">
                <a className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Link>
              &nbsp;/&nbsp;
              <Link href="https://twitter.com/designersriram">
                <a className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Link>
            </p>
            <p>Let&apos;s talk. I love to make connections and discover people. Drop a message @&nbsp;
              <Link href="https://twitter.com/designersriram">
                <a className="text-indigo-600 dark:text-sky-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-sky-600" target="_blank" rel="noopener noreferrer">msgsrive@gmail</a>
              </Link>&nbsp;or DM me on any of the social media platforms 😊<br /></p>
            <p>Stay safe. Cheers! 🍻</p>
          </footer>
        </div>
      </main>


    </Layout>
  )
}