import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/hero/hero.png';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    },
});

const Hero = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Home') {
                setState('Home')
            }
        },
    });
    return (
        <div ref={ref} className='Home border-b border-neutral-900 pb-4 mt-24 lg:mb-35' >
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <motion.h1
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                            className='text-white'>
                            Hi, I'm
                        </motion.h1>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='lg:pb-16 pb-8 text-6xl front-thin tracking-tight lg:mt-16 mt-8 lg:text-8xl lg:text-start text-center'>
                                <span>Andreas</span>
                                <span> Lakus</span>
                        </motion.h1>
                        <motion.span
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                        >
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='mb-5'
                        >
                            I do
                        </motion.p>
                            <Typewriter
                                options={{
                                    wrapperClassName: 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent',
                                    strings: ["","Git/Dev(Sec)Ops", "Cloud Engineering", "Artificial Intelligence", "Computer Vision", "Photogrammetry", "IT-Infrastructure", "IT-Operations", "IT-Project Management", "Software Development", "Solution Development", "Consulting", "Leading Teams", "Service Management"],
                                    autoStart: true,
                                    loop: true,
                                    loopCount: Infinity,
                                    deleteSpeed: "natural",
                                    pauseFor: 1000,
                                }}
                            />
                    </div>
                    <div>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='my-s max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt='Andreas Lakus'>
                        </motion.img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;