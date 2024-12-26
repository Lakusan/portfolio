import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { FiExternalLink } from "react-icons/fi";


import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';

const Education = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        threshold: 0.3,
        onChange: (inView) => {
            if (inView && state != 'Education') {
                setState('Education');
                console.log(state);
            }
        },
    });
    return (
        <div ref={ref} className='Education border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Education
            </motion.h1>
            <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                <div className="mx-auto grid lg:grid-cols-3 gap-10">
                    {EDUCATION.map((edu) => (
                        <div key={edu.degree} className="group h-96 lg:h-[360px] w-80 lg:w-96 md:w-96 [perspective:1000px]">
                            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* FrontFace */}
                                <motion.div
                                    className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-xl border-4 border-neutral-800"
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}>
                                    {(
                                       <section className="grid grid-cols-2 items-center justify-center m-2  gap-2">
                                       <div>
                                           <img
                                               className="object-cover cursor-pointer h-1/3 w-1/3 rounded-xl"
                                               src={edu.icon}
                                               alt="icon institute"
                                           />
                                       </div>
                                       <div className='grid grid-row-1 grid-cols-1 lg:text-2xl text-1xl text-blue-200'>{edu.institude}</div>
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
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[12px] lg:text-xs md:text-xs font-small text-lime-500'>{tech}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.skills.map((skill, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[12px] lg:text-xs md:text-xs font-small text-blue-500'>{skill}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.code.map((c, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-[12px] lg:text-xs md:text-xs font-small text-yellow-500'>{c}</span>))}
                                        </div>
                                    </section>

                                </motion.div>
                                {/* BackFace */}
                                <div className="absolute inset-0 h-full w-full rounded-xl px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] border-4 border-neutral-800">
                                    <div className="flex min-h-full flex-col items-center justify-center">
                                        <h2 className="text-1xl lg:text-lg font-bold mb-4">Final grade: {edu.grade}</h2>
                                        {edu.awards.map((award, index) => (
                                        <p key={index} className="text-1xl lg:text-lg text-purple-100 mt-2 mb-2">
                                            {award}
                                        </p>
                                            ))}

                                        <a href={edu.hrefProgram} className="inline-flex mt-3 font-medium items-center text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                                <span>Program Details:</span>
                                                <FiExternalLink className="ml-1" />
                                        </a>

                                        {edu.hrefThesis !== undefined ? <a href={edu.hrefThesis} className="inline-flex mt-3 font-medium items-center text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Thesis:<FiExternalLink className='tml-1' /></a>: null}
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