import React from 'react';
import Image from 'next/image';
import { MapPinIcon, ClockIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      
      {/* Promoted Tag Section */}
      <div className="mb-2">
        {job.isPromoted && (
          <span className="text-[10px] font-bold text-slate-900">
            Promoted
          </span>
        )}
      </div>

      <div className="grow">
        {/* Logo & Info: Container ko items-center kiya hay image jaisa align karne k liye */}
        <div className="flex items-center gap-3">
          {/* Logo Box: Gray border aur rounded corners jaisa image me hay (40x40) */}
          <div className="w-10 min-h-10 border border-blue-400/30 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={job.logo} 
              alt={job.company} 
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-[15px] font-bold text-slate-900 leading-tight truncate">
              {job.title}
            </h3>
            <p className="text-[12px] text-slate-500 mt-0.5">{job.company}</p>
          </div>
        </div>

        {/* Details: Location & Applicants */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-slate-500 text-[13px]">
            <MapPinIcon className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-[13px]">
            <ClockIcon className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="truncate">
              {job.postedTime} | <span className="text-[#0052B4] font-semibold">{job.applicants} applicants</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Section: Apply & Bookmark */}
      <div className="mt-5 flex items-center gap-2">
        <button className="flex-1 bg-[#0052B4] text-white py-2.5 rounded-lg text-[13px] font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
          Apply Now
        </button>
        <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group shrink-0">
          <BookmarkIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
        </button>
      </div>

    </div>
  );
};

export default JobCard;