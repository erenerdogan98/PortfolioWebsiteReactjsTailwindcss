import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FrameImage = motion(Image);


const FeaturedArticle = ({title, img, time, summary, link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-slate-400 border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-slate-800'/>
            <Link
            href={link}
            target="_blank"
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FrameImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.25}} 
                priority
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              33vw"/>
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-purple-400 font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
} 

export default FeaturedArticle
