import React from 'react'

export default function BottomBanner() {
  return (
    <div className="full-width bg-bg-6 z-50">
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-0 mx-auto hidden max-w-[1320px] lg:flex gap-[30px] -translate-y-[30%]"> 
          <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1"><a className="flex flex-col justify-between h-full" href="#">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                        
                    </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">Computer for Designer, Art
                </h4>
              </div>
                
              </a>
          </div>
          <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1"><a className="flex flex-col justify-between h-full" href="#">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                        
                    </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">Computer for Designer, Art
                </h4>
              </div>
                
              </a>
          </div>
          <div className="rounded-2xl p-[20px] border border-gray-200 group bg-white flex-[1.4]"><a className="flex h-full" href="#">
              <div className="flex flex-col gap-1">
                <div className="bg-opacity-20 rounded-full transition-all duration-200 w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#f25023]">
                        
                    </div>
                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">Computer for Designer, Art
                </h4>
                <p className="text-gray-500 text-[14px] xl:text-lead-lg xl:mb-5">Real-time display of data</p>
              </div>
                
              </a>
          </div>
        
        </div>
      </div>
  )
}
