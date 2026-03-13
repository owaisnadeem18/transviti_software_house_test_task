"use client"

import { logo, searchIcon, userAvatar } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Find Jobs', href: '#', active: true },
    { name: 'Top Companies', href: '#' },
    { name: 'Job Tracker', href: '#' },
    { name: 'My Calendar', href: '#' },
    { name: 'Documents', href: '#' },
    { name: 'Messages', href: '#' },
    { name: 'Notifications', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 font-sans sticky top-0 z-50">
      <div className="max-w-360 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 gap-4">
          
          {/* Left: Logo & Nav Container */}
          <div className="flex items-center gap-8 min-w-0"> 
            <div className="shrink-0">
              <Image src={logo} alt="Logo" className="h-8 w-auto" priority />
            </div>

            {/* Desktop Navigation - Added whitespace-nowrap and better shrinking */}
            <nav className="hidden xl:flex items-center gap-6 whitespace-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors ${
                    link.active ? 'text-[#0052B4] font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Search, Button, Profile */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Search Bar - Added max-width and responsive width */}
            <div className="relative w-40 xl:w-64">
              <Image src={searchIcon} className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4' alt="search" />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-[#F4F7FE] border-none rounded-md py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>

            {/* Blue CTA Button */}
            <button className="bg-[#0052B4] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all whitespace-nowrap shrink-0">
              Resume Builder
            </button>

            {/* User Avatar */}
            <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-100 cursor-pointer shrink-0">
              <Image
                src={userAvatar} 
                alt="User" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button - xl:hidden logic fixed */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <div className="relative mb-4">
            <Image src={searchIcon} className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4' alt="search" />
            <input type="text" placeholder="Search" className="w-full bg-[#F4F7FE] rounded-md py-2 pl-10 pr-4" />
          </div>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block py-2 text-base font-medium text-slate-600">
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-[#0052B4] text-white py-3 rounded-md font-bold">
            Resume Builder
          </button>
        </div>
      )}
    </header>
  )
}

export default Header