import React from 'react'
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const JobFeed = () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Search & Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Find your Dream Job, <span className="text-[#0052B4]">Albert!</span></h1>
          <p className="text-sm text-slate-500">Explore the latest job openings and apply for the best opportunities available today!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 mr-2" />
            <input type="text" placeholder="Job Title, Company, or Keywords" className="w-full outline-none text-sm" />
          </div>
          <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
            <MapPinIcon className="h-5 w-5 text-slate-400 mr-2" />
            <select className="w-full outline-none text-sm text-slate-500 bg-transparent">
              <option>Select Location</option>
            </select>
          </div>
          <div className="flex-1 flex items-center px-4 py-3">
            <BriefcaseIcon className="h-5 w-5 text-slate-400 mr-2" />
            <select className="w-full outline-none text-sm text-slate-500 bg-transparent">
              <option>Job Type</option>
            </select>
          </div>
          <button className="bg-[#0052B4] text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Similar:</span>
          {['Frontend', 'Backend', 'Graphic Designer'].map(tag => (
            <button key={tag} className="text-xs border border-gray-300 px-3 py-1 rounded-md text-slate-600 hover:bg-gray-50">
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Grid Container */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-slate-900">Featured Jobs</h2>
          <button className="text-[#0052B4] text-sm font-semibold hover:underline">See Featured Jobs</button>
        </div>
        
        {/* Mock Data Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4">
           {/* Map your mock data here later */}
           <p className="text-slate-400 italic text-sm">Ready for your mock data mapping...</p>
        </div>
      </div>
    </div>
  )
}

export default JobFeed