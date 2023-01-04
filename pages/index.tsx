import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import TinderCard from "../components/TinderCard"

const Home: NextPage = () => {
  return (
    <div className="flex-1 bg-white min-h-screen">
      <Head>
        <title>Tinder Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* TinderCards */}
      <TinderCard/>

      {/* Swipe Buttons */}
    </div>
  )
}

export default Home
