import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { FiExternalLink } from "react-icons/fi";

// const Education = () => {
//     return (
//         <div className='border-b border-neutral-900 pb-4'>
//             <motion.h1
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className='my-20 text-center text-4xl'>
//                 Education
//             </motion.h1>
//             {EDUCATION.map((education, index) => (
//                 <div className='w-screen flex justify-center'>
//                 <div key={index} className="m-4 flex flex-col items-center justify-center rounded-lg shadow md:flex-row md:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700">
//                     <img className="w-1/4 m-2" src={education.icon} alt=""></img>
//                     <div className="m-3 flex flex-col justify-between p-4 leading-normal">
//                         <h5 className="mb-3 py-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{education.institude}</h5>
//                         <p className="bg-blue-900 mb-1 font-bold text-gray-700 dark:text-gray-400">{education.degree}</p>
//                         <p className="bg-slate-900 mb-1 font-normal text-gray-700 dark:text-gray-400">{education.spec}</p>
//                         <p className="bg-yellow-900 mb-1 font-normal text-gray-700 dark:text-gray-400">{education.period}</p>
//                         <p className="bg-green-900 mb-1 font-semibold text-amber-400">Grade: {education.grade}</p>
//                         {education.awards.map((award, key) => (
//                             <p key={key} className="bg-red-900 my-1font-semibold text--400">{award}</p>
//                         ))}
//                         <a href={education.href} className="inline-flex font-medium items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                             About this degree
//                             <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

const Education = () => {

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Education
            </motion.h1>
            {/* <section className='bg-red-500 py-16 mx-auto sm:py-20 '> */}
            {/* <section className='bg-green-500 mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl'> */}
            <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                {/* <div className="bg-blue-500 mx-auto grid gap-12 space-y-10 md:space-y-10 sm:gap-16 lg:grid-cols-3"> */}
                <div className="mx-auto grid lg:grid-cols-3 gap-10">
                    {EDUCATION.map((edu) => (
                        <div key={edu.degree} className="group h-96 w-96 [perspective:1000px]">
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
                                                    alt="icon institude"
                                                />
                                            </div>
                                            <div className='grid grid-row-1 grid-cols-1 text-2xl'>{edu.institude}</div>
                                        </section>
                                    )}
                                    <section className="grid grid-rows-3 items-center justify-start m-2">
                                        <p className="text-1xl font-semibold">{edu.degree}</p>
                                        <p className="text-1xl text-neutral-400">{edu.spec}</p>
                                        <p className="text-1xl text-neutral-400">{edu.period}</p>
                                    </section>

                                    <section className='mx-1'>
                                        <div className='m-1 flex flex-wrap'>
                                            {edu.technologies.map((tech, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-xs font-small text-lime-500'>{tech}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.skills.map((skill, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-xs font-small text-blue-500'>{skill}</span>
                                            ))}
                                        </div>
                                        <div className='m-1 flex flex-wrap'>

                                            {edu.code.map((c, index) => (
                                                <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-xs font-small text-yellow-500'>{c}</span>))}
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
            {/* </section> */}
            {/* </section> */}
        </div>
    );
};

export default Education;