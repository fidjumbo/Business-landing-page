import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp"
import { IoIosArrowRoundForward } from 'react-icons/io'

const MonitorSection = () => {
  return (
     <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:24'>
                {/* left section */}
                <div className='md:w-1/2 w-full'>
                     <p className='text-green-500 font-semibold'>MONITOR</p>
                     <h2 className='text-3xl md:text-4xl font-bold text-neutral-500
                     mb-6 mt-4 md:w-4/5'>Introducing best mobile <br /> carousels</h2>
    
                      <p className='text-gray-600 mb-8'>before the ship back. Round, round all round the world. <br />
                      Round, all around the world. Round, all around the world. Round, <br />
                      all around the world.
                      </p>
    
                      <a href="#" className='text-blue-500 font-semibold flex items-center gap-2
                      hover:gap-4 transition-all'>Learn more about monitoring
                        <IoIosArrowRoundForward className='size-8'/></a>
                </div>
                
    
    
                {/* right section */}
                <div className='md:w-1/2 w-full'>
                    <img src={monitorCardImg} alt="schedule image" className='w-full h-auto' />
                </div>
               
            </div>
        </section>
  )
}

export default MonitorSection