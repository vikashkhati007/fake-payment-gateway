"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { CardDetails } from '@/components/dashboard/CardDetails'
const page =  () => {
  const router = useRouter();
  const session =  useSession();
    // if(session.status === "unauthenticated"){
    //   router.push('/')
    // }
  return (
    <section>
      <Header/>
      <div className="maincontainer flex flex-row">
      <Sidebar/>
      <CardDetails/>
      </div>
    </section>
  )
}

export default page