import { motion } from 'framer-motion';
import { TbBrandUnity } from "react-icons/tb";
import { FaConfluence } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { SiJira } from "react-icons/si";

import GoogleCloudLogo from '../assets/GoogleCloudIcon';
import RedisIcon from '../assets/RedisIcon.png';
import MongoDBIcon from '../assets/MongoDBIcon.png';
import OpenCVIcon from '../assets/OpenCVIcon_wht.png';
import JenkinsIcon from '../assets/JenkinsIcon.png';

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
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                trasition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-10'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <TbBrandUnity className='text-7xl text-neutral-100'></TbBrandUnity>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <FaConfluence className='text-7xl text-blue-600'></FaConfluence>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <GoogleCloudLogo></GoogleCloudLogo>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <SiUnrealengine className='text-7xl bg-black rounded-full'></SiUnrealengine>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <IoLogoNodejs className='text-7xl text-[#5FA04E] '></IoLogoNodejs>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <img src={RedisIcon} className="w-[72px] h-[72px]"></img>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <img src={MongoDBIcon} className="w-[72px] h-[72px]"></img>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <img src={OpenCVIcon} className="w-[72px] h-[72px] object-contain"></img>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.1)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <SiDotnet className='text-7xl text-neutral-50 bg-[#4F2AD2] rounded-full'></SiDotnet>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.1)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                    <SiJira className='text-7xl text-[#2684FF]'></SiJira>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.8)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1 }}
                    className='rounded-2xl border-4 border-neutral-800 p-2 shadow-[0px_0px_10px_5px_rgba(165,255,28,0.5)]'>
                            <img src={JenkinsIcon} className='w-[72px] h-[72px] object-contain'></img>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
