import React from 'react'
import NavBar from './NavBar/NavBar'
import MainProfile from './MainProfile/MainProfile'
import Experience from './WorkExperience/Experience'
import ExpertArea from './ExpertArea/ExpertArea'
import Projects from './Projects/Projects'



const LayOut = () => {
  return (
    <>
    <NavBar />
    <div className="w-full sm:flex flex-col justify-center items-center">
      <div className="w-full mt-24 sm:flex sm:flex-row sm:gap-1"> {/* Added sm:gap-4 */}
        {/* Left Column - Main Profile */}
        <div className="flex justify-between items-start w-full sm:w-1/3 mb-4 sm:mb-0"> {/* Modified to take up 1/3rd width on larger screens */}
          <MainProfile />
        </div>

        {/* Middle Column - Experience and Expert Area */}
        <div className="w-full sm:w-1/3 flex flex-col gap-2"> {/* Takes up 2/3rd width on larger screens */}
          <Experience />
          <ExpertArea />
        </div>

        
        {/* Right Column - Projects */}
        <div className="w-full sm:w-1/3 flex flex-col gap-2"> {/* Takes up 2/3rd width on larger screens */}
         <Projects/>
        </div>


      </div>
    </div>
  </>
  )
}

export default LayOut