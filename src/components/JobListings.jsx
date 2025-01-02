import React from 'react'
import { useState, useEffect } from 'react';
import JobList from './joblist'
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  // empty array inside useState, when it loads we will useEffect and it will fill this out from the response of API
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'
      try {
        const response = await fetch(apiUrl) // Updated to fetch from local jobs.json file
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
        
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobList key={job.id} job={job} />
              ))}
            </div>
          )}

        
      </div>
    </section>
  )
}

export default JobListings