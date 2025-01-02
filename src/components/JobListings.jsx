import React from 'react'
import { useState, useEffect } from 'react';
import JobList from './joblist'

const JobListings = ({isHome = false}) => {
     const [jobs, setJobs] = useState([])
     // empty array inside useState, when it loads we will useEffect and it will fill this out from the response of API
     const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch('/jobs.json') // Updated to fetch from local jobs.json file
          const data = await response.json()
          setJobs(data)
        } catch (error) {
          console.log("error fetching data", error)
        } finally {
          setLoading(false)
        }
      }

      fetchJobs()
    }, []) // empty array inside useEffect, it will only run once when the component loads, prevents infinite loop

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            jobs.map((job) => (
              <JobList key={job.id} job={job}/>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default JobListings