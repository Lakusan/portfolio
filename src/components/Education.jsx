import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

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
        <section className="py-16 mx-auto sm:py-20">
            <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
                <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                        Education
                    </h2>
                    <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
                        {EDUCATION.map((edu) => (
                            <div key={edu.degree} className="group h-96 w-96 [perspective:1000px]">
                                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* Front Face /}
  
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
  
                      {edu.href && (
  
                        <Image
  
                          className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
  
                          src={edu.href}
  
                          alt={edu.href}
  
                          width={320}
  
                          height={320}
  
                        />
  
                      )}
  
                      <p className="md:my-6 text-2xl">{edu.href}</p>
  
                    </div>
  
                    {/ Back Face */}
                                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col items-center justify-center">
                                            <h2 className="text-2xl font-bold mb-4">{edu.grade}</h2>
                                            <p className="text-lg text-pretty text-center mb-4">
                                                {edu.institude}
                                            </p>
                                            <a href="tel:555-555-5555" className="inline-flex">
                                                <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                                                    <span>Schedule Service</span>
                                                    {/* <WrenchScrewdriverIcon className="h-6 w-6 ml-2" /> */}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};




export default Education;