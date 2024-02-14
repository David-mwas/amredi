import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import DownloadApp from './DownloadApp'

function Homepage() {
  return (
    <div className='overflow-x-hidden flex flex-col snap-mandatory snap-scroll'>
      <Header/>
      <DownloadApp/>
      <Hero/>
    </div>
  )
}

export default Homepage