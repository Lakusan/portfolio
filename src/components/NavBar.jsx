import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


const NavBar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt='logo'></img>
            </div>
            <div className='m-8 flex items-center justyfy-center gap-4 text-2xl'>
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
        </nav>
    );
};

export default NavBar;