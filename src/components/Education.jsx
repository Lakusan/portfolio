import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { FiExternalLink } from "react-icons/fi";


import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext, useState } from 'react';

const Education = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Education') {
                setState('Education')
            }
        },
    });
    return (
        <div ref={ref} className='Education border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Education
            </motion.h1>
            <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                <div className="mx-auto grid lg:grid-cols-3 gap-10">
                    {EDUCATION.map((edu) => (
                        <div key={edu.degree} className="group h-80  w-72 lg:w-96 md:w-96 [perspective:1000px]">
                            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* FrontFace */}
                                <motion.div
                                    className=" bg-black/80 absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]"
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}>
                                    {(
                                        <section className="grid grid-cols-2 items-center justify-center m-2 p-2 gap-2">
                                            <div>
                                                <img
                                                    className="object-cover cursor-pointer h-1/3 w-1/3 rounded-xl"
                                                    src={edu.icon}
                                                    alt="icon institute"
                                                />
                                            </div>
                                            <div className='grid grid-row-1 grid-cols-1 lg:text-2xl text-1xl text-purple-100'>{edu.institude}</div>
                                        </section>
                                    )}
                                    <section className="grid grid-rows-3 items-center justify-start m-2">
                                        <p className="text-1xl font-semibold text-purple-100">{edu.degree}</p>
                                        <p className="lg:text-1xl text-xs text-neutral-400">{edu.spec}</p>
                                        <p className="lg:text-1xl text-xs text-neutral-400">{edu.period}</p>
                                    </section>

                                    <section className='mx-1'>
                                        <div className='m-1 flex flex-wrap'>
                                            {edu.technologies.map((tech, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[8px] lg:text-xs md:text-xs font-small text-lime-500'>{tech}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.skills.map((skill, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[8px] lg:text-xs md:text-xs font-small text-blue-500'>{skill}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.code.map((c, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[8px] lg:text-xs md:text-xs font-small text-yellow-500'>{c}</span>))}
                                        </div>
                                    </section>

                                </motion.div>
                                {/* BackFace */}
                                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <div className="flex min-h-full flex-col items-center justify-center">
                                        <h2 className="text-2xl font-bold mb-4">Final grade: {edu.grade}</h2>
                                        {edu.awards.map((award, index) => (
                                        <p key={index} className="text-lg text-pretty text-center mb-4 text-neutral-100">
                                            {award}
                                        </p>
                                            ))}

                                        <a href={edu.href} className="inline-flex font-medium items-center text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                                <span>Details:</span>
                                                <FiExternalLink />
                                        </a>
                                    </div>
                                </div>
                                {/* END_BackFace */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;