import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/hero/hero.png';
import { motion, transform } from 'framer-motion';
import Typewriter from "typewriter-effect";


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
    return (
        <div className='border-b border-neutral-900 pb-4 mt-12 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='text-white'>
                            Hi, I'm
                        </h1>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl front-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Andreas Lakus
                        </motion.h1>
                        <motion.span
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                        >
                        </motion.span>
                        <p>
                            I do
                        </p>
                        <Typewriter
                            options={{
                                wrapperClassName: 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent',
                                strings: ["Git/Dev(Sec)Ops", "Cloud Engineering", "Ai & Computer Vision", "Photogrammetry", "IT-Infrastructure", "Software & Solution Development", "Consulting", "Leading Teams", "Service Management"],
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