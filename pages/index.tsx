import type { NextPage } from 'next'
import Head from 'next/head'
import FilterHome from '../Components/FilterHome'

import HeaderComponent from '../Components/Header'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 w-full bg-red-200">
      <Head>
        <title>Wingi | Power Banks</title>
      </Head>

      <HeaderComponent />

      <main className="flex w-full flex-col items-center justify-center px-20 text-center">
      
      <div>
        <FilterHome />
      </div>

        <div>
          <h1>Body</h1>
        </div>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Home
