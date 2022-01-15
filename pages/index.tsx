import Head from 'next/head'
import Homepage from './Homepage'
import Welcome from './Welcome'

export default function Home() {


  
  return (
    <div className='bg-gradient-to-r from-red-400 to-blue-400'>
      <Head>
        <title>Leverage Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      
      <Welcome />
    </div>
  )
}
