import { SiGnubash } from "react-icons/si";
import { GiCamel } from "react-icons/gi";
import { PiFileCpp } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";

import CSharpIcon from "../assets/CSharpIcon";
import PythonIcon from "../assets/PythonIcon.png";

import { motion, useTime, useTransform, useMotionValue } from "framer-motion";


const Coding = () => {
    const time = useTime();
    const rotate = useTransform(time, [0,10000], [0, 360], { clamp: false });
    const x = useMotionValue(0);
    const y = useTransform(time, (latest) => Math.sin(latest / 1000) * 50);
    const counterRotate = useTransform(rotate, (r) => -r);
    return (
        <div className='border-b border-neutral-800 pb-24'>
               <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Coding
            </motion.h1>
            <div className='flex flex-wrap items-center justify-center gap-10'>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <SiGnubash className='text-7xl text-neutral-100'></SiGnubash>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <GiCamel className='text-7xl text-neutral-100'></GiCamel>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <PiFileCpp className='text-7xl text-neutral-100'></PiFileCpp>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <CSharpIcon className='text-7xl text-neutral-100'></CSharpIcon>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <SiJavascript className='text-7xl text-yellow-400'></SiJavascript>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <img src={PythonIcon} className="w-[72px] h-[72px]"></img>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};


export default Coding;