import React from 'react'
import { useState } from 'react'

const joblist = ({ job }) => {
    const [showFullDescription,setShowFullDescription] = useState(false)

    //compoment level state

    //2 values passed in to the list of useState; 1st one that will do the toggling and the 2nd one is the function that will do the toggling

    let description = job.description
    
    if(!showFullDescription){
        description = description.substring(0,80) + '...'
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>
    
      <div className="mb-5">
      {description}

      <button onClick= {() => setShowFullDescription((prevState)=> !prevState) }className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription? "Less" : "More" }</button>
{/* // we did not directly pass the setShowFullDescription function to the onClick event handler, because it will call it without even clicking on it, rather we passed the function as an arrow function to the onClick event handler, so that it will only be called when the button is clicked. */}


      </div>
    
      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
    
      <div className="border border-gray-100 mb-5"></div>
    
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <i className="fa-solid fa-location-dot text-lg"></i>
          {job.location}
        </div>
        <a
          href={`/job/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
        Read More
        </a>
      </div>
    </div>
    </div>
    
    
               
  )
}

export default joblist