import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <Lilcon reference={ref} />
      <motion.div initial={{ y:50 }} whileInView={{ y:0 }} transition={{ duration:0.5, type:"spring" }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position} <br />
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize text-xl'>{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-2xl md:w-[2px] md:left-[30px] xs:left-[20px]' />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
              position='Front End Developer'
              company='PT Bank Rakyat Indonesia (Persero) Tbk.'
              companyLink='https://www.bri.co.id/'
              time='May - July 2023'
              address='Jakarta, Indonesia'
              work='Bekerja dalam tim untuk membangun aplikasi berbasis website untuk kebutuhan internal perusahaan BRI yaitu aplikasi DDB Ceria. aplikasi tersebut digunakan untuk mengelola data nasabah dan transaksi yang dilakukan oleh nasabah. aplikasi tersebut dibangun menggunakan framework ReactJS dan menggunakan bahasa pemrograman Javascript.'
            /> 
            <Details 
              position='Front End Developer'
              company='PT Graphie Global Interaktif'
              companyLink='https://www.graphie.com'
              time='September - December 2022'
              address='Jakarta, Indonesia'
              work='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod beatae atque quasi obcaecati reprehenderit perspiciatis delectus repudiandae. Aliquam quibusdam ipsum magni error dignissimos autem!'
            /> 
            <Details 
              position='Intern Front End Programmer'
              company='PT Javan Cipta Solusi'
              companyLink='https://www.javan.com'
              time='May - Agust 2022'
              address='Yogyakarta, Indonesia'
              work='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod beatae atque quasi obcaecati reprehenderit perspiciatis delectus repudiandae. Aliquam quibusdam ipsum magni error dignissimos autem!'
            /> 
            <Details 
              position='Contract project Manager'
              company='Company Creative'
              companyLink='#'
              time='July - September 2020'
              address='Yogyakarta, Indonesia'
              work='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod beatae atque quasi obcaecati reprehenderit perspiciatis delectus repudiandae. Aliquam quibusdam ipsum magni error dignissimos autem!'
            /> 
            <Details 
              position='Wordpress Developer'
              company='SD Muhammadiyah Kadisoro 1'
              companyLink='#'
              time='July - September 2020'
              address='Yogyakarta, Indonesia'
              work='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod beatae atque quasi obcaecati reprehenderit perspiciatis delectus repudiandae. Aliquam quibusdam ipsum magni error dignissimos autem!'
            /> 
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience