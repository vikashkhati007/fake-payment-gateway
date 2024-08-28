"use client"
import { useState } from 'react'
import { CircleXIcon, LayoutDashboard, PersonStanding, Settings, SquareChevronLeft, Menu } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md focus:outline-none">
        <Menu size={24} />
      </button>

      <section className={cn(
        "fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out bg-black text-gray-300 shadow-lg",
        isOpen ? "transform-none" : "-translate-x-full"
      )}>
        <div className="flex flex-col gap-4 p-6 font-sans">
          <div onClick={toggleSidebar} className="self-end cursor-pointer text-gray-500 hover:text-white">
            <CircleXIcon size={24} />
          </div>
          <div className="item flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white">
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          <div className="item flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white">
            <PersonStanding size={20} />
            Profile
          </div>
          <div className="item flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white">
            <Settings size={20} />
            Settings
          </div>
          <div className="item flex items-center gap-3 py-3 px-4 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white">
            <SquareChevronLeft size={20} />
            Log Out
          </div>
        </div>
      </section>
    </>
  )
}

export default Sidebar
