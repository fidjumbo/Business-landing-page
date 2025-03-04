import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import heroImage from "../assets/hero-image.png"
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../ultils/motion'

const Hero = () => {
    return (
        <section id="home" className='flex md:flex-row flex-col justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-6 container'>
            {/* left column */}
            <div className='space-y-8 w-full md:w-1/2'>
                {/* star badge */}
                <motion.div 
                     variants={fadeIn('right', 0.2)}
                     initial="hidden"
                     whileInView="show"
                >
                  <div className='group flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full w-fit transition-colors cursor-pointer'>
                    <span className='text-blue-600 hover:text-rose-500 group-hover:scale-110 transition-transform'><MdOutlineStarPurple500 /></span>
                    <span className='font-medium text-sm'>Jump start your growth</span>
                  </div>
                </motion.div>

                <motion.h1 
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                className='font-bold text-3xl md:text-4xl lg:text-5xl leading-tight'>We boost the growth for <br />
                    <span className='inline-block relative text-blue-600' >Startup to Fortune 500
                        <span className='bottom-0 left-0 absolute bg-blue-200 opacity-60 w-full h-0.5'></span> </span> <br />
                    Companies <span className='inline-block ml-2 animate-pulse'>⏰</span>
                </motion.h1>

                < motion.p 
                 variants={fadeIn('up', 0.4)}
                 initial="hidden"
                 whileInView="show"
                className='max-w-xl text-gray-600 text-lg md:text-xl'>Get the most accurate leads, sales people training and conversions,
                    tools and more — all within the same one billing.</motion.p>

                <motion.div 
                 variants={fadeIn('up', 0.5)}
                 initial="hidden"
                 whileInView="show"
                 className='flex gap-1 max-w-md'>
                    <input type="email" 
                       placeholder='Email address' 
                       className='flex-1 px-3 py-3 border border-gray-200 focus:border-blue-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all' />
                   <button className='bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 px-7 py-2 rounded-xl text-white transition-all cursor-pointer'>→</button> 
                </motion.div>
            </div>


            {/* right column */}
            <motion.div 
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView="show"
            className='mt-16 md:mt-0 pl-0 md:pl-12 w-full md:w-1/2'>
                <div className='relative'>
                    <img src={heroImage} alt='hero image' className='z-10 relative rounded-lg hover:scale-[1.02] transition-transform duration-300' />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero