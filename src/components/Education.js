import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({type, time, place, info}) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 xs:my-4 lg:my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <Lilcon reference={ref} />
      <motion.div initial={{ y:50 }} whileInView={{ y:0 }} transition={{ duration:0.5, type:"spring" }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm text-sm text-slate-700 dark:text-light'>
          {info}
        </p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <>
      <div className='my-64 xs:my-32 xs:mb-48'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl md:w-[2px] md:left-[30px] xs:left-[20px]' />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
              type='Bachelor Informatics Engineering'
              time='2017 - 2021'
              place='Ahmad Dahlan University'
              info='Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55191'
            />
            <Details 
              type='Teknik Audio Vidio'
              time='2014 - 2017'
              place='SMKN 3 Mataram'
              info='Jl. Pendidikan No.47, Dasan Agung Baru, Kec. Selaparang, Kota Mataram, Nusa Tenggara Bar. 83114'
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Education