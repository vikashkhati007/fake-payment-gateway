import { LayoutDashboard, PersonStanding, Settings, SquareChevronLeft } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='w-52 bg-black border-r border-white border-opacity-20 max-h-screen absolute  md:flex hidden'>

        <div className="itemscontainer flex flex-col gap-3 w-full">
            <div className="item flex gap-2 hover:bg-[#1E201E] px-10 cursor-pointer py-2 border border-white border-opacity-20 ">
                <LayoutDashboard/>
                Dashboard</div>
                <div className="item flex gap-2 hover:bg-[#1E201E] px-10 cursor-pointer py-2 border border-white border-opacity-20 ">
                <PersonStanding/>
                Profile</div>
                <div className="item flex gap-2 hover:bg-[#1E201E] px-10 cursor-pointer py-2 border border-white border-opacity-20 ">
                <Settings/>
                Setting</div>
                <div className="item flex gap-2 hover:bg-[#1E201E] px-10 cursor-pointer py-2 border border-white border-opacity-20 ">
                <SquareChevronLeft/>
                Log Out</div>
        </div>
    </section>
  )
}

export default Sidebar