import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <> 
    <Hero />
      <HomeCards/>  
      {/* homecards stores the card components */}

      <JobListings/>

      <ViewAllJobs/>
      </>
  )
}

export default HomePage