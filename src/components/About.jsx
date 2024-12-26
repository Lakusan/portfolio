import { useContext, useState } from 'react';
import { InView, useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";

import { motion } from 'framer-motion';

import aboutImg from '../assets/about/me.png';

import AccordionItem from './Accordion';


const About = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'About') {
                setState('About');
                console.log(state);
            }
        },
    });

    return (
        <InView>
            <div ref={ref} className='About border-b border-neutral-900 pb-4 mt-24'>
                <h1 className='my-20 text-center text-4xl'>
                    About
                    <span className='bg-gradient-to-r from-green-300 via-teal-500 to-blue-500 bg-clip-text text-4xl tracking-light text-transparent'>
                        Me
                    </span>
                </h1>
                <div className='flex flex-wrap'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='w-full lg:w-1/2 lg:p-8'>
                        <div className='flex items-center justify-center'>
                            <img className='rounded-2xl' src={aboutImg} alt="about"></img>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className='w-full lg:w-1/2'>

                            <div className='flex justify-center lg:justify-start'>
                            <AccordionItem></AccordionItem>
                        </div>
                        {/* 
                        <div className='bg-green-500 flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT_PERS}</p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </InView>
    );
};

export default About;