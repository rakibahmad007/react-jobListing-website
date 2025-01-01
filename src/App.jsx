

import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"


const App = () => {
  return (
    <>
      <Navbar/> 
      <Hero />
      <HomeCards/>  
      {/* homecards stores the card components */}

      <JobListings/>

      <ViewAllJobs/>

      
      
   

      
    </>
  )
}

export default App