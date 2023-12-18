import React from "react";

const Details = ({position, place, time, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <div>
            <h3 className='capitalize font-semibold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;@{place}</h3>
            <span className='capitalize font-medium text-emerald-950 dark:text-light/75 xs:text-sm'>
                {time}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    return (
        <>
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>
                <div className="absolute left-8 top-0 w-[4px] h-full bg-slate-600 origin-top dark:bg-light"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                    position='Software Developer'
                    place='Upwork'
                    time='2022'
                    work='Worked ....'/>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Experience;