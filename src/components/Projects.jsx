import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Projects') {
                setState('Projects');
                console.log(state);
            }
        },
    });
    return (
        <div ref={ref} className='Projects border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4 flex lg:justify-start justify-center'>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className='inline-block'>
                                <img
                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className='mb-6 rounded'>
                                </img>
                            </a>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold text-blue-200'>{project.title}</h6>
                            <h1 className='text-neutral-400 mb-1'>{project.duration}</h1>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3 mb-3'>
                                {project.demoURL !== undefined ? <div className='inline-block'><a href={project.demoURL} className="text-blue-500 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">Demo:<FiExternalLink className='ml-1'></FiExternalLink></a></div> : null}
                                {project.detailsURL !== undefined ? <div className='inline-block'><a href={project.detailsURL} className="text-blue-500 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">Details:<FiExternalLink className='ml-1'/></a></div> : null}
                                {project.githubURL !== undefined ? <div className='inline-block'><a href={project.githubURL} className="text-blue-500 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">Github:<FaGithub className='text-neutral-50 ml-1' /></a></div> : null}
                            </div>
                            <div className='mb-2 flex flex-wrap'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-lime-500'>{tech}</span>
                                ))}
                            </div>
                            <div className='mb-2 flex flex-wrap'>
                                {project.coding.map((lang, index) => (
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

export default Projects;