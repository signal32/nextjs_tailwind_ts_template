import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import AppBaseLayout, { useAppBaseLayout } from '../components/layouts/AppBaseLayout'

const Home: NextPageWithLayout = () => {
  return (
    <div className='h-full w-full'>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className='text-white'>Content placeholder</h1>
      </div>
    </div>
  )
}

Home.getLayout = useAppBaseLayout;

export default Home
