import React from 'react'
import Image from 'next/image'
import { coverImage, profileImage, userAvatar } from '@/assets' // Using your existing assets
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-75 flex flex-col gap-6 shrink-0">
      {/* Profile Card */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className='relative' >

        <Image src = {coverImage} alt='cover-image' className="h-24" />
          {/* Cover Image Placeholder */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden bg-white">
              <Image src={profileImage} alt="Profile" className="object-cover h-full w-full" />
            </div>
          </div>
        
        </div>
        
        <div className="pt-12 pb-6 px-4 text-center">
          <h2 className="text-lg font-bold text-slate-900">Albert Flores</h2>
          <p className="text-xs text-slate-500 mt-1 px-4 leading-tight">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-[10px] text-slate-400 mt-2">Clinton, Maryland</p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500">Profile Visitors</span>
          <span className="text-[#0052B4] font-bold">140</span>
        </div>
        <div className="flex justify-between items-center text-sm border-y border-gray-50 py-3">
          <span className="text-slate-500">Resume Viewers</span>
          <span className="text-[#0052B4] font-bold">20</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500">My Jobs</span>
          <span className="text-[#0052B4] font-bold">88</span>
        </div>
      </div>

      {/* Calendar Card */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="font-bold text-slate-900 text-sm">My calendar</h3>
          <ChevronDownIcon className="h-4 w-4 text-slate-500" />
        </div>
        <p className="text-[10px] text-slate-400 mt-1">Upcoming Interviews</p>
      </div>
    </aside>
  )
}

export default Sidebar