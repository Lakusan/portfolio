import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion'

import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';

const Experience = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Experience') {
                setState('Experience');
            }
        },
    });
    return (
        <div ref={ref} className='Experience border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                                <a href={experience.href} target="_blank" rel="noopener noreferrer">
                                    <img className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-full rounded-2xl mb-5' src={experience.logo} alt="logo"></img>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-bold'>
                                {experience.role}
                                <div>
                                    <span className='text-sm text-blue-200'>
                                        {experience.company}
                                    </span>
                                </div>
                            </h6>
                            {experience.description.map((desc, index) => (
                                <p key={index} className='mb-4 text-neutral-400'>{desc}</p>
                            ))}
                            <div className='mb-2 flex flex-wrap'>
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-lime-500'>{tech}</span>
                                ))}
                            </div>
                            <div className='mb-2 flex flex-wrap'>
                                {experience.skills.map((skill, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400'>{skill}</span>
                                ))}
                            </div>
                            <div className='mb-2 flex flex-wrap'>
                                {experience.code.map((lang, index) => (
                                    <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-amber-400'>{lang}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;