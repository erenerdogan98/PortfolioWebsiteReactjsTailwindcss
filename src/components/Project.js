import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const FrameImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FrameImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.25}}/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-purple-500 font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-bold underline md:text-base'>Visit</Link>
                    <Link href={github} target="_blank" className="w-7 md:w-6"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

export default Project;