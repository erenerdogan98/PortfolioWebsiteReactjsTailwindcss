import AnimatedText from "@/components/Animated";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";


const projects = () => {
    return (
        <>
        <Head>
            <title>Eren | Projects Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Online Management System" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-7-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title='Online Management System'
                        img={project1}
                        summary='özet ekle'
                        link="/"
                        github="https://github.com/erenerdogan98"
                        type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title='Online Management System'
                        img={project1}
                        summary='özet ekle'
                        link="/"
                        github="https://github.com/erenerdogan98"
                        type="Featured Project" 
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        Project-2
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        Project-3
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        Project-4
                    </div>

                </div>
            </Layout>
        </main>
        </>
    )
}

export default projects;