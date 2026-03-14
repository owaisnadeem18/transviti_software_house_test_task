import React from 'react';
import Image from 'next/image';
import { MapPinIcon, ClockIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      
      {/* Promoted Tag Section */}
      <div>
        {job.isPromoted && (
          <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">
            Promoted
          </span>
        )}
      </div>

      {/* Content Wrapper: Isay grow rakha hay taake button hamesha bottom par rahein */}
      <div className="grow">
        {/* Logo & Info */}
        <div className="flex items-start gap-3">
          
            <Image
              src={job.logo} 
              alt={job.company} 
              width={20}
              height={20}
            />
          <div className="min-w-0">
            <h3 className="text-[15px] font-bold text-slate-900 leading-tight truncate">
              {job.title}
            </h3>
            <p className="text-[12px] text-slate-500 mt-1">{job.company}</p>
          </div>
        </div>

        {/* Details: Location & Applicants */}
        <div className="mt-5 space-y-2.5">
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
      <div className="mt-6 flex items-center gap-2">
        <button className="flex-1 bg-[#0052B4] text-white py-2.5 rounded-lg text-[13px] font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
          Apply Now
        </button>
        <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group shrink-0">
          <BookmarkIcon className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
        </button>
      </div>

    </div>
  );
};

export default JobCard;