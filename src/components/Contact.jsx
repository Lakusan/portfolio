import { CONTACT } from '../constants/';
import { motion } from 'framer-motion';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import { useInView } from "react-intersection-observer";
import { AppContext } from "../app-context/AppContext";
import { useContext } from 'react';



const Contact = () => {
    const { state, setState } = useContext(AppContext);
    const { ref } = useInView({
        onChange: (inView) => {
            if (inView && state != 'Contact') {
                setState('Contact');
            }
        },
    });
    return (
        <div ref={ref} className='Contact border-b border-neutral-900 pb-20'>
            {/* <div ref={ref}>
                <h2>{`Header inside viewport ${inView}.`}</h2>
            </div> */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>
                Get in Touch
            </motion.h1>
            <div className='text-center tracking-tighter'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>

                    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                        <a href='https://www.linkedin.com/in/lakusan' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href='https://github.com/Lakusan' target="_blank" rel="noopener noreferrer">
                            <FaGithub></FaGithub>
                        </a>
                        <a href='https://discordapp.com/users/500697857209139250' target="_blank" rel="noopener noreferrer">
                            <FaDiscord></FaDiscord >
                        </a>
                    </div>
                </motion.div>
                <motion.a
                    whileInView={{ opacity: 1, y: 10 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}
                </motion.a>
            </div>
        </div>
    );
};

export default Contact;