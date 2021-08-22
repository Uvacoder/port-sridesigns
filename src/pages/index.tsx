import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal website of Sriram Venugopal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to my portfolio!</h1>
    </div>
  )
}

export default Home
