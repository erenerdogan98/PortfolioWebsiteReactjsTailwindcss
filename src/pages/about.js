import AnimatedText from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import aboutMe from "../../public/images/profile/aboutme.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";


const AnimatedNumbers = ({ x }) => {
    const ref = useRef(null);
    /* More about , search framer motion example => framer.com */
    const motionX = useMotionValue(0);
    const springX = useSpring(motionX, { duration: 3000 })
    const isView = useInView(ref, { once: true }); // this hooke except the element when element is inview

    useEffect(() => {
        if (isView) {
            motionX.set(x)
        }
    }, [isView, x, motionX])

    useEffect(() => {
        springX.on("change", (latest) => {  /* callback will be the latest value*/
            if (ref.current && latest.toFixed(0) <= x) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springX, x])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className='pt-16'>
                    <AnimatedText text="Eren Erdoğan" className='mb-16 lg:!text-7xl sm:text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-decoration-slate-950 dark:text-light/75">About me</h2>
                            <p className='font-medium'>I successfully switched from a degree in civil engineering to a career as a talented software developer by working hard and being a committed professional. I'm dedicated to producing top-notch solutions that satisfy corporate goals and go above and beyond expectations. I have expertise inC#,.NET,JS, PL/SQL, and other technologies.</p><br />
                            <p className='font-medium'>I'm currently employed as a software developer, using my excellent technical abilities to create and manage crucial software programs. I have a lot of expertise with programming languages like C#,.NET, JS,PL/SQL, Excel VBA, and others to create solid solutions. My expertise and abilities enable me to work cross-functionally effectively and swiftly adapt to new surroundings and technology.
                            </p><br />
                            <p className="font-medium">I'm passionate about providing creative ideas that support organizations in achieving their objectives. I have a strong analytical mentality and outstanding problem-solving skills.To stay abreast of new technology and business trends, I'm also really motivated to keep studying and developing my abilities.</p>

                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-red-950
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={aboutMe} alt="Eren" className='w-full h-auto rounded-2xl:' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers x={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-red-950 dark:text-light/75 xl:text-center md:text-lg 
                        sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers x={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-red-950 dark:text-light/75  xl:text-center md:text-lg 
                        sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers x={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-red-950 dark:text-light/75  xl:text-center md:text-lg 
                        sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about