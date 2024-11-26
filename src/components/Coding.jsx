import { SiGnubash } from "react-icons/si";

const Coding = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Coding</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGnubash className='text-7xl text-neutral-100'></SiGnubash>
                </div>
            </div>
        </div>
    );
};

export default Coding;