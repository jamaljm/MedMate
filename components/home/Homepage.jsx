import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Consultbanner from '../consult/Consultbanner'


export default function Homepage() {
  return (
    
<main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <div className="flex items-start justify-between">
     <Sidebar />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
           <Navbar />
                <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                    <div className="flex flex-col flex-wrap sm:flex-row ">
                       <Consultbanner />
                       {/* <Ambulancebanner />
                       <Medicinbanner /> */}
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
