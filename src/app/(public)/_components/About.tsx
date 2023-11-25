import React from 'react'

export const About = () => {
  return (
    <div>
    <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] gap-8 flex flex-col lg:flex-row xl:gap-[180px]"> 
    <div className="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl:gap-y-[70px]">
      <div>
        <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">17+
        </h1>
        <p className="text-quote mb-3">Our Office</p>
        <p className="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business
        </p>
      </div>
      <div>
        <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">2K+
        </h1>
        <p className="text-quote mb-3">Completed Cases</p>
        <p className="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business
        </p>
      </div>
      <div>
        <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">28+
        </h1>
        <p className="text-quote mb-3">Happy Clients</p>
        <p className="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business
        </p>
      </div>
      <div>
        <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">86
        </h1>
        <p className="text-quote mb-3">Skilled People</p>
        <p className="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business
        </p>
      </div>
    </div>
    <div className="flex-1">
      <h1 className="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[30px] lg:mb-[53px]">Tell us about your business, we are ready to solve.
      </h1>
      <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] mb-[49px]">
        <input className="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .."/>
        <div>
          <button className="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-[#f25023] whitespace-nowrap flex-1 w-fit gap-5">Get A Quote<i>
                
             </i>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-9">
        <div className="flex items-center gap-[10px]">
                <span className="text-md text-gray-500">Subscribe Newsletter</span>
        </div>
        <div className="flex items-center gap-[10px]">
                <span className="text-md text-gray-500">Get The Latest News</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
