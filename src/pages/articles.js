import AnimatedText from "@/components/Animated";
import FeaturedArticle from "@/components/FeaturedArticle";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import Article from "@/components/Article";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import TransitionEffect from "@/components/TransitionEffect";

const articles = () => {
    return (
        <>
        <Head>
            <title>Articles Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-14'>
                <AnimatedText text="Denemee" className="mb-16
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle 
                    title="eklenecek"
                    summary="ekleee"
                    time="3 min read"
                    link="/"
                    img={article1}/>
                    <FeaturedArticle 
                    title="eklenecek"
                    summary="ekleee"
                    time="3 min read"
                    link="/"
                    img={article2}/>
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16">All articles</h2>
                <ul>
                    <Article 
                    title="Eklenecek"
                    date="October 15, 2023"
                    link="Eklenecek"
                    img={article3}
                    />
                     <Article 
                    title="Eklenecek"
                    date="October 15, 2023"
                    link="Eklenecek"
                    img={article4}
                    />
                     <Article 
                    title="Eklenecek"
                    date="October 15, 2023"
                    link="Eklenecek"
                    img={article3}
                    />
                     <Article 
                    title="Eklenecek"
                    date="October 15, 2023"
                    link="Eklenecek"
                    img={article3}
                    />
                </ul>
            </Layout>
        </main>
        </>
    )
}

export default articles