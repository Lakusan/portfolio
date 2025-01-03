import { SiGnubash } from "react-icons/si";
import { GiCamel } from "react-icons/gi";
import { PiFileCpp } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";

import CSharpIcon from "../assets/tech/CSharpIcon";
import PythonIcon from "../assets/tech/PythonIcon.png";

import { motion, useTime, useTransform, useMotionValue } from "framer-motion";


const Coding = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });
    const x = useMotionValue(0);
    const y = useTransform(time, (latest) => Math.sin(latest / 1000) * 50);
    const counterRotate = useTransform(rotate, (r) => -r);
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Coding
            </motion.h1>
            <div className='flex flex-wrap items-center justify-center gap-10'>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'

                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://www.gnu.org/software/bash/manual/bash.html' target="_blank" rel="noopener noreferrer">
                            <SiGnubash className='text-7xl text-neutral-100'></SiGnubash>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://www.perl.com/' target="_blank" rel="noopener noreferrer">
                            <GiCamel className='text-7xl text-neutral-100'></GiCamel>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://isocpp.org/' target="_blank" rel="noopener noreferrer">
                            <PiFileCpp className='text-7xl text-neutral-100'></PiFileCpp>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://learn.microsoft.com/en-us/dotnet/csharp/' target="_blank" rel="noopener noreferrer">
                            <CSharpIcon className='text-7xl text-neutral-100'></CSharpIcon>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noopener noreferrer">
                            <SiJavascript className='text-7xl text-yellow-400'></SiJavascript>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='rounded-2xl border-4 border-neutral-800 p-4 shadow-[0px_0px_10px_5px_rgba(255,194,37,0.5)]'
                    style={{ rotate, x, y }}>
                    <motion.div style={{ rotate: counterRotate }}>
                        <a href='https://www.python.org/' target="_blank" rel="noopener noreferrer">
                            <img src={PythonIcon} className="w-[72px] h-[72px]"></img>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};


export default Coding;