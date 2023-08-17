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
      <div className='my-64 xs:my-32'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-2xl md:w-[2px] md:left-[30px] xs:left-[20px]' />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
              position='Intern Front End Developer'
              company='PT Bank Rakyat Indonesia (Persero) Tbk.'
              companyLink='https://www.bri.co.id/'
              time='May - July 2023'
              address='Jakarta, Indonesia'
              work='Working in a team to build a website-based application for BRI internal needs, namely the DDB Ceria application. the application is built using React Js and Tailwind Css.'
            /> 
            <Details 
              position='Front End Developer'
              company='PT Graphie Global Interaktif'
              companyLink='https://www.graphie.com'
              time='September - December 2022'
              address='Jakarta, Indonesia'
              work='Create a website-based application from a needs analysis, then create a UI/UX design. implement the UI/UX design that has been made into an interactive and responsive website, as well as API integration provided by the backend to the code. The technologies used to build the application are figma, React Js, and Bootstrap.'
            /> 
            <Details 
              position='Intern Front End Programmer'
              company='PT Javan Cipta Solusi'
              companyLink='https://www.javan.com'
              time='May - Agust 2022'
              address='Yogyakarta, Indonesia'
              work='Work closely with the team to build website-based applications for clients, from implementing UI/UX designs to responsive website forms. API integration from the backend into the website, as well as implementing GIT in program development.'
            /> 
            <Details 
              position='Contract project Manager'
              company='Company Creative'
              companyLink='#'
              time='July - September 2020'
              address='Yogyakarta, Indonesia'
              work='Work with the team to build mobile applications. In making the application, I function to coordinate and lead meetings for clients. Plan, implement, monitor and evaluate project implementation, as well as test whether the application is appropriate or not.'
            /> 
            <Details 
              position='Wordpress Developer'
              company='SD Muhammadiyah Kadisoro 1'
              companyLink='#'
              time='July - September 2020'
              address='Yogyakarta, Indonesia'
              work='Create a school profile website. Guiding the school so that it can fill in information on the school website, then guiding the school in changing website templates and functions in a template, and finally teaching the school how to host and expand hosting on the website.'
            /> 
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience