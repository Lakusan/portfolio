import { SiGnubash } from "react-icons/si";
import { GiCamel } from "react-icons/gi";
import { PiFileCpp } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";

import CSharpIcon from "../assets/CSharpIcon";
import PythonIcon from "../assets/PythonIcon.png";

const Coding = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Coding</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiGnubash className='text-7xl text-neutral-100'></SiGnubash>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <GiCamel className='text-7xl text-neutral-100'></GiCamel>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <PiFileCpp className='text-7xl text-neutral-100'></PiFileCpp>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <CSharpIcon className='text-7xl text-[#846AE1]'></CSharpIcon>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className='text-7xl text-yellow-400'></SiJavascript>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={PythonIcon} className="w-[72px] h-[72px]"></img>
                </div>
            </div>
        </div>
    );
};


export default Coding;