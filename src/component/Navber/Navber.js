import React from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <div>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<nav className="bg-gray-800 py-2">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4 navlink">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
             <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">Home</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/projects">Projects</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">About me</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/contacts">Contact me</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/blogs">Blogs</Link> 
          </div>
        </div>
      </div>
    
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className=" pt-2 pb-3 space-y-1 navlink">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">Home</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/projects">Projects</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">About me</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/contacts">Contact me</Link> 
                 <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to="/blogs">Blogs</Link> 
    </div>
  </div>
</nav>

        </div>
    );
};

export default Navber;