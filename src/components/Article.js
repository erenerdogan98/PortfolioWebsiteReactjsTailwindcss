import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FrameImage = motion(Image);

const MoveImg = ({ img, title, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imageRef = useRef(null);

    function handleMouse(e){
        //console.log(e.pageX)
        imageRef.current.style.display= "inline-block";
        x.set(e.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event){
        //console.log(event.pageX)
        imageRef.current.style.display= "none";
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target="_blank"
        onMouseMove = {handleMouse}
        onMouseLeave = {handleMouseLeave}>        
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FrameImage
            style={{ x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.25 }}}
            ref={imageRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>
    )
}

const Article = ({ img, title, link, date }) => {
    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.4, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
        bg-light text-dark first:mt-0 border border-solid border-red-950
         border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
         sm:flex-col'>
            <MoveImg title={title} img={img} link={link} />
            <span className='text-cyan-400 font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

export default Article