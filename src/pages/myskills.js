import AnimatedText from "@/components/Animated";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const SkillCategory = ({ categoryTitle, skills }) => {
  return (
    <>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
      <Layout>
        <AnimatedText text={categoryTitle}/> <br/>
      <ul className='grid grid-cols-1 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xs flex items-center justify-between
        bg-light text-dark first:mt-0 border border-solid border-red-950 
         border-r-2 border-b-2 dark:border-light dark:bg-dark dark:text-light'
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      </Layout>
    </main>
    </>
    
  );
};

const Skills = () => {
  const codingSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS"];
  const professionalSkills = ["Communication", "Teamwork", "Problem Solving", "Time Management"];

  return (
    <div className="items-center justify-between w-full">
        <AnimatedText text="Certifications" className="flex items-center"/>
        <Link href="/Certificates.rar" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base' 
                  download={true}
                  > Certifications
                  </Link>
        <div className="flex">
      <SkillCategory categoryTitle="Coding Skills" skills={codingSkills} />
      <div className="w-4"></div>
      <SkillCategory categoryTitle="Professional Skills" skills={professionalSkills} />
    </div>
    </div>
  );
};

export default Skills;
