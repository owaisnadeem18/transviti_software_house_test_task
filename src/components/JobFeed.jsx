import React from 'react'
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { jobSearchIcon, searchIcon } from '@/assets'
import Image from 'next/image'
import JobsHeader from './JobsHeader'
import JobCard from './JobCard'
import { featuredJobsData } from '@/lib/data/featuredJobsData'

const JobFeed = () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Search & Filter Section */}
      <div className="py-4 flex flex-col gap-6"> 
        <div className="">
          <h1 className="text-2xl font-bold text-slate-900">Find your Dream Job, <span className="text-[#0052B4]">Albert!</span></h1>
          <p className="text-sm text-slate-500">Explore the latest job openings and apply for the best opportunities available today!</p>
        </div>

        <div className="bg-white flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-100 items-center min-h-17.5 pr-4">
  
  {/* Section 1: Input */}
  <div className="flex-[1.5] flex items-center px-6 h-full relative">
    <input 
      type="text" 
      placeholder="Job Title, Company, or Keywords" 
      className="w-full outline-none text-[14px] placeholder:text-slate-400" 
    />
    {/* Inset Divider */}
    <div className="hidden md:block absolute right-0 h-8 w-px bg-gray-200" />
  </div>

  {/* Section 2: Location */}
  <div className="flex-1 flex items-center px-6 h-full relative">
    <select className="w-full outline-none text-[14px] text-slate-500 bg-transparent appearance-none cursor-pointer">
      <option>Select Location</option>
    </select>
    <ChevronDownIcon className="h-4 w-4 text-slate-400 shrink-0 ml-1" />
    {/* Inset Divider */}
    <div className="hidden md:block absolute right-0 h-8 w-px bg-gray-200" />
  </div>

  {/* Section 3: Job Type */}
  <div className="flex-1 flex items-center px-6 h-full">
    <select className="w-full outline-none text-[14px] text-slate-500 bg-transparent appearance-none cursor-pointer">
      <option>Job Type</option>
    </select>
    <ChevronDownIcon className="h-4 w-4 text-slate-400 shrink-0 ml-1" />
  </div>

  {/* Section 4: Search Button */}
  <button className="bg-[#0154AA] text-white px-6 py-2.5 hover:bg-blue-700 transition-all flex items-center gap-2 rounded-lg font-semibold shrink-0 ml-2">
    <Image src={jobSearchIcon} alt="Search" className="h-4 w-4 brightness-0 invert" />
    Search
  </button>
</div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">Similar:</span>
          {['Frontend', 'Backend', 'Graphic Designer'].map(tag => (
            <button key={tag} className="text-xs border border-gray-300 px-3.75 py-2 text-slate-600 hover:bg-gray-50 rounded-[5px] ">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <JobsHeader heading={"Featured Jobs"} subheading={"See Featured Jobs"} />


          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' >

          {
            featuredJobsData.map(featuredJob => 
              
              <JobCard job={featuredJob} key={featuredJob?.id} />
            )
          }

          </div>

    </div>
  )
}

export default JobFeed