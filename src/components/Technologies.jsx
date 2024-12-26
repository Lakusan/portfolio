import { motion } from 'framer-motion';
import { TbBrandUnity } from "react-icons/tb";
import { FaConfluence } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { SiJira } from "react-icons/si";

import GoogleCloudLogo from '../assets/tech/GoogleCloudIcon';
import RedisIcon from '../assets/tech/RedisIcon.png';
import MongoDBIcon from '../assets/tech/MongoDBIcon.png';
import OpenCVIcon from '../assets/tech/OpenCVIcon_wht.png';
import JenkinsIcon from '../assets/tech/JenkinsIcon.png';

import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    },
});

const Technologies = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Skills') {
                setState('Skills');
                console.log(state);
            }
        },
    });
    return (
        <div ref={ref} className='Skills border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                trasition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-10'>
                <motion.div
                    variants={iconVariants(1.1)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://dotnet.microsoft.com/' target="_blank" rel="noopener noreferrer">
                        <SiJira className='text-7xl text-[#2684FF]'></SiJira>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://www.atlassian.com/software/confluence' target="_blank" rel="noopener noreferrer">
                        <FaConfluence className='text-7xl text-blue-600'></FaConfluence>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://cloud.google.com/' target="_blank" rel="noopener noreferrer">
                        <GoogleCloudLogo></GoogleCloudLogo>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://www.unrealengine.com/' target="_blank" rel="noopener noreferrer">
                        <SiUnrealengine className='text-7xl bg-black rounded-full'></SiUnrealengine>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://unity.com/' target="_blank" rel="noopener noreferrer">
                        <TbBrandUnity className='text-7xl text-neutral-100'></TbBrandUnity>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.1)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://dotnet.microsoft.com/' target="_blank" rel="noopener noreferrer">
                        <SiDotnet className='text-7xl text-neutral-50 bg-[#4F2AD2] rounded-full'></SiDotnet>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://nodejs.org/' target="_blank" rel="noopener noreferrer">
                        <IoLogoNodejs className='text-7xl text-[#5FA04E] '></IoLogoNodejs>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://redis.io/' target="_blank" rel="noopener noreferrer">
                        <img src={RedisIcon} className="w-[72px] h-[72px]"></img>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">
                        <img src={MongoDBIcon} className="w-[72px] h-[72px]"></img>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://opencv.org/' target="_blank" rel="noopener noreferrer">
                        <img src={OpenCVIcon} className="w-[72px] h-[72px] object-contain"></img>
                    </a>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.8)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <a href='https://www.jenkins.io/' target="_blank" rel="noopener noreferrer">
                        <img src={JenkinsIcon} className='w-[72px] h-[72px] object-contain'></img>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
