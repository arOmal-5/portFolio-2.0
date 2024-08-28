import React from 'react';
import acProject from '../../Assets/acproject.png';
import bossProject from '../../Assets/bossProject.png'
import amityhubProject from '../../Assets/amityhubproject.png'
import mediaplayerProject from '../../Assets/mediaplayerProject.png';  // Ensure the path to the image is correct
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="max-w-sm p-6 shadow-2xl bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        {/* Work Experience Section */}
        <div className="">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Projects</h3>

          {/* Grid layout for expert areas */}
          <div className="relative flex flex-col mt-4 gap-2">
            <div className="relative">
              <img src={acProject} alt="Project" className="w-full h-auto rounded-lg" />

              {/* Overlay Heading */}
              <a href="https://aiswaryaconstructions.homes/" className=''>
              <p className="absolute inset-0 flex gap-2 items-center justify-center text-white text-sm font-bold bg-black bg-opacity-20">
                <FaExternalLinkAlt/> Construction and Real-estate
              </p>

              </a>
             
            </div>

            <div className="relative rounded-xl">
              <img src={mediaplayerProject} alt="Project" className="w-full h-auto rounded-xl" />

              {/* Overlay Heading */}
              <a href="https://meek-yeot-69c170.netlify.app" className='bg-white'>
              <p className="absolute inset-0 flex items-center justify-center text-white gap-2 text-sm font-bold bg-black bg-opacity-20">
              <FaExternalLinkAlt/> mediaplayer Project 
              </p>

              </a>
             
            </div>

            <div className="relative rounded-xl">
              <img src={amityhubProject} alt="Project" className="w-full h-auto rounded-xl" />

              {/* Overlay Heading */}
              <a href="https://amityhub-frontend-git-master-aromal-ss-projects.vercel.app/auth" className='bg-white'>
              <p className="absolute inset-0 flex items-center justify-center text-white gap-2 text-sm font-bold bg-black bg-opacity-20">
              <FaExternalLinkAlt/> Social Media- Amityhub 
              </p>

              </a>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
