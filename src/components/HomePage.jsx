import React from 'react'
import Sidebar from '@/components/Sidebar'
import JobFeed from '@/components/JobFeed'

const HomePage = () => {
  return (
    <div className='bg-[#F4F4F4] min-h-screen py-8'>
      <div className="max-w-360 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
        <Sidebar />
        <JobFeed />
      </div>
    </div>
  )
}

export default HomePage