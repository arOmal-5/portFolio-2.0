import React from 'react'
import reactIcon from '../../Assets/reacticon.png'
import node from '../../Assets/node.svg'
import Express from '../../Assets/Express.png'
import js from '../../Assets/js.png'
import mongodb from '../../Assets/mongodb.svg'
import github from '../../Assets/github.png'


const ExpertArea = () => {
  return (
    <>


    <div className="max-w-sm p-4 shadow-2xl bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* Work Experience Section */}
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Expert Area</h3>

        {/* Grid layout for expert areas */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {/* Example Expert Area - Repeat these blocks for more experts */}
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={reactIcon} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">React JS</p>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={node} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">Node JS</p>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={Express} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-14 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">Express JS</p>
          </div>

          {/* Add more items as needed */}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {/* Example Expert Area - Repeat these blocks for more experts */}
          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={js} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">Javascript</p>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={mongodb} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">Mongo DB</p>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={github} // Replace with actual logo path
              alt="Expert Logo 1"
              className="w-16 h-14 mb-2"
            />
            <p className="text-center text-gray-900 dark:text-white">GIthub</p>
          </div>

          {/* Add more items as needed */}
        </div>
      </div>
    </div>



    </>
  )
}

export default ExpertArea