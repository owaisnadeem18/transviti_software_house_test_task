import Link from 'next/link'
import React from 'react'

const JobsHeader = ({heading , subheading}) => {
  return (
    <div className='flex items-center gap-4' >

        <h2 className='text-[18px]'>
            {heading}
        </h2>

        <Link href={"/"} className='text-[14px] text-[#0154AA] border-b border-[#0154AA]' >
                {subheading}
        </Link>
      
    </div>
  )
}

export default JobsHeader
